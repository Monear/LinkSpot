// sanity/sanity.query.ts

import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      fullName,
      headline,
      profileImage {alt, "image": asset->url},
      shortBio,
      fullBio,
      email,
      socialLinks,
      skills
    }`
  );
}

export async function getProjects() {
    return client.fetch(
      groq`*[_type == "project"]{
        _id, 
        name,
        "slug": slug.current,
        tagline,
        "logo": logo.asset->url,
        description
      }`
    );
}

export async function getSingleProject(slug: string) {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      name,
      projectUrl,
      coverImage { alt, "image": asset->url },
      tagline,
      description
    }`,
    { slug }
  );
}

export async function getProducts() {
  return client.fetch(
    groq`*[_type == "product"]{
      _id,
      title,
      description,
      image {alt, "image": asset->url},
    }`
  );
}

export async function getSingleBlogPost(slug: string) {
  return client.fetch(
    groq`*[_type == "blogPost" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      author,
      publishedAt,
      "mainImage": mainImage.asset->url,
      body
    }`,
    { slug }
  );
}

export async function getBlogPosts() {
  return client.fetch(
    groq`*[_type == "blogPost"] | order(publishedAt desc) [0..2] {
      _id,
      title,
      "slug": slug.current,
      author,
      publishedAt,
      "mainImage": mainImage.asset->url,
      body
    }`
  );
}