// app/blog/page.tsx
import Image from "next/image";
import Link from "next/link";
import { getBlogPosts } from "@/sanity/sanity.query";
import type { BlogPostType } from "@/types";
import Layout from '../app/(site)/components/global/Layout';

export default function Blog({ posts }: { posts: BlogPostType[] }) {
    return (
        <Layout>
            <main className="max-w-7xl mx-auto md:px-16 px-6">
                <section className="max-w-2xl mb-16">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">
                        Featured blog posts
                    </h1>
                    <p className="text-base text-zinc-400 leading-relaxed">
                        Here are some of my latest blog posts. Feel free to read and share your thoughts!
                    </p>
                </section>

                <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
                    {posts.map((post) => (
                        <Link
                            href={`/blog/${post.slug}`}
                            key={post._id}
                            className="flex items-center gap-x-4 bg-[#1d1d20] border border-transparent hover:border-zinc-700 p-4 rounded-lg ease-in-out"
                        >
                            {post.mainImage && (
                                <Image
                                    src={post.mainImage} 
                                    width={60}
                                    height={60}
                                    alt={post.title}
                                    className="bg-zinc-800 rounded-md p-2"
                                />
                            )}
                            <div>
                                <h2 className="font-semibold mb-1">{post.title}</h2>
                                <div className="text-sm text-zinc-400">{post.author}</div>
                            </div>
                        </Link>
                    ))}
                </section>
            </main>
        </Layout>
    );
}

export async function getServerSideProps() {
    const posts: BlogPostType[] = await getBlogPosts();

    return {
        props: {
            posts,
        },
    };
}