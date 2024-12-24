import { Metadata } from 'next';

declare module 'next' {
  interface PageProps {
    params: Promise<{ [key: string]: string }>;
    searchParams?: { [key: string]: string | string[] | undefined };
  }
}

export interface BlogPageParams {
  slug: string;
}

export interface GenerateMetadataProps {
  params: BlogPageParams;
  searchParams?: { [key: string]: string | string[] | undefined };
}

export interface PageProps {
  params: Promise<{ [key: string]: string }>;
  searchParams?: { [key: string]: string | string[] | undefined };
}

export interface BlogPostProps {
  params: Promise<{ slug: string }>;
  searchParams?: { [key: string]: string | string[] | undefined };
}
