// types/index.ts

import { PortableTextBlock } from "sanity";

export type ProfileType = {
  _id: string,
  fullName: string,
  headline: string,
  profileImage: {
    alt: string,
    image: string
  },
  shortBio: string,
  email: string,
  fullBio: PortableTextBlock[],
  socialLinks: string[],
  skills: string[],
};

export type ProjectType = {
    _id: string;
    name: string;
    slug: string;
    tagline: string;
    projectUrl: string;
    logo: string;
    coverImage: {
      alt: string | null;
      image: string;
    };
    description: PortableTextBlock[];
  };

  export type ProductType = {
    _id: string;
    title: string;
    description: string;
    image: {
      image: string;
      alt: string;
    };
  };

  // types.ts
  export type BlogPostType = {
    _id: string;
    title: string;
    slug: string;
    author: string;
    publishedAt: string;
    mainImage: string; // Change this line
    body: any;
  };