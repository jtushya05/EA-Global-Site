export const siteConfig = {
  name: "EA Global",
  url: "https://eaglobal.edu",
  ogImage: "https://eaglobal.edu/og.jpg",
  description: "Expert career counselling and guidance to help you find your perfect career path. Get personalized advice from industry professionals.",
  keywords: [
    "career counselling",
    "career guidance",
    "education counselling",
    "overseas education",
    "career development",
    "career planning",
    "college selection",
    "stream selection",
    "career expert",
    "career consultation"
  ]
};

export type MetadataProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
};

export function constructMetadata({
  title,
  description,
  keywords = [],
  image,
}: MetadataProps = {}) {
  return {
    title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
    description: description || siteConfig.description,
    keywords: [...siteConfig.keywords, ...keywords].join(", "),
    openGraph: {
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description: description || siteConfig.description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: image || siteConfig.ogImage,
          width: 1200,
          height: 630,
        },
      ],
      locale: "en-US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description: description || siteConfig.description,
      images: [image || siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
    },
  };
}