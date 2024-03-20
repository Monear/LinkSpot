// pages/blog/[slug].tsx
import { GetServerSidePropsContext } from "next";
import { PortableText } from "@portabletext/react";
import { getSingleBlogPost } from "@/sanity/sanity.query";
import type { BlogPostType } from "@/types";
import Layout from '../../app/(site)/components/global/Layout';

export default function BlogPost({ post }: { post: BlogPostType }) {
    return (
        <Layout>
            <h1>{post.title}</h1>
            <p>{post.author}</p>
            <p>{post.publishedAt}</p>
            <img src={post.mainImage.image} alt={post.mainImage.alt || ""} />
            <PortableText value={post.body} />
        </Layout>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    if (!context.params || typeof context.params.slug !== "string") {
        return { notFound: true };
    }

    const post: BlogPostType = await getSingleBlogPost(context.params.slug);

    return {
        props: {
            post,
        },
    };
}