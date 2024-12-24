import { BlogPost } from '../types/post';
import { expertCounselingPost } from './expert-counseling-post';
import { careerPathPost } from './career-path-post';
import { skillsPost } from './skills-post';
import { collegeApplicationsPost } from './college-applications-post';
import { softSkillsPost } from './soft-skills-post';

// Store all posts for static path generation
const allPosts: Record<string, BlogPost> = {
  "expert-career-counseling-future": expertCounselingPost,
  "choose-right-career-path": careerPathPost,
  "top-skills-2024": skillsPost,
  "navigating-college-applications": collegeApplicationsPost,
  "role-of-soft-skills": softSkillsPost
};

// Get current date at midnight for consistent comparison
const currentDate = new Date();
currentDate.setHours(0, 0, 0, 0);

// Filter and sort posts
export const posts = Object.fromEntries(
  Object.entries(allPosts)
    .filter(([_, post]) => {
      const postDate = new Date(post.date);
      postDate.setHours(0, 0, 0, 0);
      return postDate <= currentDate; // Show posts with dates <= current date
    })
    .sort(([_, a], [__, b]) => 
      new Date(b.date).getTime() - new Date(a.date).getTime() // Sort newest first
    )
) as Record<string, BlogPost>;

// For static path generation, we need all slugs regardless of date
export const getAllSlugs = () => Object.keys(allPosts);

// For individual post pages, we need access to all posts regardless of date
export const getPostBySlug = (slug: string) => allPosts[slug];
