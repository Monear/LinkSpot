// pages/index.tsx

import { getProfile, getProducts, getProjects, getBlogPosts } from "@/sanity/sanity.query";
import BlogPosts from "../app/(site)/components/global/BlogPosts";
import type { ProfileType, ProductType, ProjectType, BlogPostType } from "@/types";
import RootLayout from "../app/(site)/components/global/IndexLayout";
import Products from "../app/(site)/components/global/Product";
import Projects from "../app/(site)/components/global/Projects";
import Contact from "../app/(site)/components/global/Contact";
import Navbar from "@/app/(site)/components/global/Navbar";
import Footer from "@/app/(site)/components/global/FooterIndex";
import { useEffect, useRef } from 'react';
import createScrollSnap from 'scroll-snap';


type HomeProps = {
  profile: ProfileType[];
  products: ProductType[];
  projects: ProjectType[];
  posts: BlogPostType[];
};

export default function Home({ profile, products, projects, posts }: HomeProps) {
  const containerRef = useRef(null);

  useEffect(() => {
    let unbind = () => {};

    if (containerRef.current) {
      const { bind, unbind: snapUnbind } = createScrollSnap(containerRef.current, {
        snapDestinationX: '0%',
        snapDestinationY: '90%',
        timeout: 20,
        duration: 100,
        threshold: 0.2,
        snapStop: false,
        easing: t => t, // linear easing
      });

      // Bind the scroll snap behavior
      bind();

      // Assign unbind to the unbind function returned by createScrollSnap
      unbind = snapUnbind;
    }

    return () => {
      // Unbind on cleanup
      unbind();
    };
  }, []);
  
  return (
    <RootLayout>
      <main ref={containerRef} className="w-9/10 mx-auto">
        <Navbar />

        <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between lg:mt- mt- mb- section">
          {profile &&
            profile.map((data) => (
              <div key={data._id} className="lg:max-w-2xl max-w-2xl">
                <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 leading-tight">
                  {data.headline}
                </h1>
                <p className="text-base text-zinc-400 leading-relaxed">
                  {data.shortBio}
                </p>
              </div>
            ))}
        </section>
        <Products products={products} className="section" />
        <Projects projects={projects} className="section" />
        <BlogPosts posts={posts} className="section" />
        <div className="relative">
          <section className="section">
            <Contact />
          </section>
          <Footer />
        </div>
      </main>
    </RootLayout>
  );
}
export async function getServerSideProps() {
  const profile: ProfileType[] = await getProfile();
  const products: ProductType[] = await getProducts();
  const projects: ProjectType[] = await getProjects();
  const posts: BlogPostType[] = await getBlogPosts();

  return {
    props: {
      profile,
      products,
      projects,
      posts,
    },
  };
}