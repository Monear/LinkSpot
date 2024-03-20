// schemaTypes/blogPost.ts
import { BiNews } from "react-icons/bi";
import { defineField } from "sanity";

const blogPost = {
    name: "blogPost",
    title: "Blog Post",
    type: "document",
    icon: BiNews,
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title" },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "author",
            title: "Author",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        {
            name: "publishedAt",
            title: "Published at",
            type: "datetime",
        },
        {
            name: "mainImage",
            title: "Main image",
            type: "image",
            options: { hotspot: true },
        },
        {
            name: "body",
            title: "Body",
            type: "array",
            of: [{ type: "block" }],
        },
    ],
};

export default blogPost;