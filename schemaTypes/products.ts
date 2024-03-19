// schemas/product.ts

import { defineField } from "sanity";
import { BiBox } from "react-icons/bi";

const product = {
    name: "product",
    title: "Product",
    type: "document",
    icon: BiBox,
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
        }),
    ],
};

export default product;