// components/global/BlogPosts.tsx
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import type { BlogPostType } from "@/types";

type BlogPostsProps = {
    posts: BlogPostType[];
    className?: string;
};

export default function BlogPosts({ posts, className }: BlogPostsProps) {
    return (
        <section className={`grid gap-4 md:grid-cols-3 md:gap-6 ${className}`}>
            {posts.map((post) => {
                return (
                    <Link
                        href={`/blog/${post.slug}`}
                        key={post._id}
                        className="flex items-center p-4 border rounded shadow"
                    >
                        {post.mainImage && (
                            <Image
                                src={post.mainImage}
                                width={60}
                                height={60}
                                alt={post.title}
                                className="bg-zinc-800 rounded-md p-2 w-1/4 h-24 object-cover mr-4"
                            />
                        )}
                        <div>
                            <h2 className="font-semibold mb-1 text-lg font-bold text-center">{post.title}</h2>
                            <div className="text-sm text-zinc-400">{post.author}</div>
                            <PortableText value={post.body} />
                        </div>
                    </Link>
                );
            })}
        </section>
    );
}