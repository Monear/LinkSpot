// app/page.tsx

import { getProfile, getProducts, getProjects, getBlogPosts } from "@/sanity/sanity.query";
import BlogPosts from "../app/(site)/components/global/BlogPosts";
import type { ProfileType, ProductType, ProjectType, BlogPostType } from "@/types";
import HeroSvg from "../app/(site)/icons/HeroSvg";
import RootLayout from "../app/(site)/components/global/Layout";
import Products from "../app/(site)/components/global/Product";
import Projects from "../app/(site)/components/global/Projects";

type HomeProps = {
  profile: ProfileType[];
  products: ProductType[];
  projects: ProjectType[];
  posts: BlogPostType[];
};

export default function Home({ profile, products, projects, posts }: HomeProps) {
  return (
    <RootLayout>
      <main className="max-w-7xl mx-auto lg:px-16 px-6">
        <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
          {profile &&
            profile.map((data) => (
              <div key={data._id} className="lg:max-w-2xl max-w-2xl">
                <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
                  {data.headline}
                </h1>
                <p className="text-base text-zinc-400 leading-relaxed">
                  {data.shortBio}
                </p>
                <ul className="flex items-center gap-x-6 my-10">
                  {Object.entries(data.socialLinks)
                    .sort()
                    .map(([key, value], id) => (
                      <li key={id}>
                        <a
                          href={value}
                          rel="noreferer noopener"
                          className="flex items-center gap-x-3 mb-5 hover:text-purple-400 duration-300"
                        >
                          {key[0].toUpperCase() + key.toLowerCase().slice(1)}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          <HeroSvg />
        </section>
        <Products products={products} />
        <Projects projects={projects} />
        <BlogPosts posts={posts} />
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