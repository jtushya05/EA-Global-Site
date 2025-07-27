import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "openid email profile",
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.expiresAt = account.expires_at;
      }
      if (profile) {
        token.profile = profile;
        // Extract comprehensive profile fields from Google
        const googleProfile = profile as any;
        
        // Basic Profile
        token.given_name = googleProfile.given_name;
        token.family_name = googleProfile.family_name;
        token.locale = googleProfile.locale;
        token.picture = googleProfile.picture;
        token.verified_email = googleProfile.email_verified;
        token.hd = googleProfile.hd; // Hosted domain
        
        // Extended Profile Data
        token.gender = googleProfile.gender;
        token.birthday = googleProfile.birthday;
        token.age_range = googleProfile.age_range;
        token.link = googleProfile.link; // Google+ profile link
        
        // Additional metadata
        token.updated_time = googleProfile.updated_time;
        token.timezone = googleProfile.timezone;
        token.verified = googleProfile.verified;
        
        // Store the complete raw profile for future use
        token.raw_profile = googleProfile;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.refreshToken = token.refreshToken as string;
      session.expiresAt = token.expiresAt as number;
      session.profile = token.profile;
      
      // Add comprehensive profile fields to session
      (session as any).given_name = token.given_name;
      (session as any).family_name = token.family_name;
      (session as any).locale = token.locale;
      (session as any).picture = token.picture;
      (session as any).verified_email = token.verified_email;
      (session as any).hd = token.hd;
      
      // Extended personal data
      (session as any).gender = token.gender;
      (session as any).birthday = token.birthday;
      (session as any).age_range = token.age_range;
      (session as any).link = token.link;
      (session as any).updated_time = token.updated_time;
      (session as any).timezone = token.timezone;
      (session as any).verified = token.verified;
      (session as any).raw_profile = token.raw_profile;
      
      return session;
    },
  },
  pages: {
    signIn: '/live-quiz-session',
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };