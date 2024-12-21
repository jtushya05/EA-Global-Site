import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { Metadata } from "next";

// This would typically come from a CMS or database
const posts = {
  "choose-right-career-path": {
    title: "How to Choose the Right Career Path",
    date: "2024-03-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    content: [
      {
        heading: "1. Self-Assessment",
        text: "Start by assessing your strengths and weaknesses. Consider taking personality tests or career assessments to gain insights into your preferences and potential career matches."
      },
      {
        heading: "2. Research Career Options",
        text: "Explore various career paths that align with your interests. Research job descriptions, required skills, and potential growth in those fields."
      },
      {
        heading: "3. Seek Guidance",
        text: "Don't hesitate to seek advice from mentors, career counselors, or professionals in your desired field. Their experiences can provide valuable insights."
      },
      {
        heading: "4. Gain Experience",
        text: "Consider internships, volunteer work, or part-time jobs in your areas of interest. Gaining hands-on experience can help you determine if a career is the right fit for you."
      },
      {
        heading: "5. Make a Decision",
        text: "After thorough research and self-reflection, it's time to make a decision. Remember, it's okay to change paths if you find that your initial choice isn't the right one."
      }
    ]
  },
  "top-skills-2024": {
    title: "Top Skills Employers Look for in 2024",
    date: "2024-03-10",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    content: [
      {
        heading: "1. Digital Literacy",
        text: "In today's digital age, being comfortable with technology is crucial. This includes basic computer skills, understanding of common software, and adaptability to new tools."
      },
      {
        heading: "2. Data Analysis",
        text: "The ability to interpret data and draw meaningful conclusions is increasingly valuable across industries."
      },
      {
        heading: "3. Emotional Intelligence",
        text: "Understanding and managing emotions, both your own and others', is crucial for workplace success and leadership."
      },
      {
        heading: "4. Adaptability",
        text: "The pace of change in modern workplaces requires employees who can quickly adapt to new situations and learn new skills."
      },
      {
        heading: "5. Communication",
        text: "Strong written and verbal communication skills remain essential, especially with the rise of remote work."
      }
    ]
  }
};

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = posts[resolvedParams.slug as keyof typeof posts];
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: post.title,
    description: post.content[0].text,
    openGraph: {
      title: post.title,
      description: post.content[0].text,
      images: [post.image],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const resolvedParams = await params;
  const post = posts[resolvedParams.slug as keyof typeof posts];

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center">Post Not Found</h1>
        <p className="text-center mt-4">The requested blog post could not be found.</p>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
        <span className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          {new Date(post.date).toLocaleDateString()}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {post.readTime}
        </span>
      </div>
      <div className="relative w-full h-[400px] mb-12">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="rounded-lg object-cover"
          priority
        />
      </div>
      <div className="prose max-w-none space-y-8">
        {post.content.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{section.heading}</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{section.text}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
