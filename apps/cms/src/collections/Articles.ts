import { CollectionConfig, RichTextCustomElement } from "payload/types";
import { CodeBlock } from "../components";

export const Articles: CollectionConfig = {
  slug: "articles",
  labels: {
    singular: "Article",
    plural: "Articles",
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
    group: "Content",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
      admin: { placeholder: "Enter title" },
      required: true,
    },
    {
      name: "description",
      type: "text",
      label: "Description",
      admin: { placeholder: "Enter Description" },
      required: true,
    },
    {
      name: "category",
      label: "Category",
      type: "relationship",
      relationTo: "categories",
      required: true,
    },
    {
      name: "createdAt",
      type: "date",
      label: "Created At",
      admin: { placeholder: "Set date" },
      required: true,
    },
    {
      name: "updatedAt",
      label: "Last Modified",
      type: "date",
      admin: { placeholder: "Set date" },
      required: true,
    },
    {
      name: "type",
      type: "radio",
      options: [
        { value: "blog", label: "Blog" },
        { value: "snippet", label: "Snippet" },
      ],
      required: true,
    },
    {
      name: "content", // required
      label: "Content",
      type: "richText", // required
      defaultValue: [
        {
          children: [{ text: "Here is some default content for this field" }],
        },
      ],
      required: true,
      admin: {
        elements: [
          "h1",
          "h2",
          "h3",
          "h4",
          "link",
          "blockquote",
          "ul",
          "ol",
          "relationship",
          "upload",
          "indent",
          CodeBlock
        ],
        leaves: [
          "bold",
          "italic",
          "underline",
          "strikethrough",
          "code",
          // {
          //   name: 'highlight',
          //   Button: CustomHighlightButton,
          //   Leaf: CustomHighlightLeaf,
          //   plugins: []
          // }
        ],
        link: {
          // Inject your own fields into the Link element
          fields: [
            {
              name: "rel",
              label: "Rel Attribute",
              type: "select",
              hasMany: true,
              options: ["noopener", "noreferrer", "nofollow"],
            },
          ],
        },
        upload: {
          collections: {
            media: {
              fields: [
                // any fields that you would like to save
                // on an upload element in the `media` collection
              ],
            },
          },
        },
      },
    },
    {
      name: "tags",
      label: "Tags",
      type: "select",
      required: true,
      hasMany: true,
      admin: {
        isClearable: true,
        isSortable: true,
      },
      options: [
        {
          label: "HTML",
          value: "html",
        },
        {
          label: "CSS",
          value: "css",
        },
        {
          label: "DOM",
          value: "dom",
        },
        {
          label: "Git",
          value: "git",
        },
        {
          label: "Github",
          value: "github",
        },
        {
          label: "Bash",
          value: "bash",
        },
        {
          label: "Webpack",
          value: "webpack",
        },
        {
          label: "SEO",
          value: "seo",
        },
        {
          label: "TypeScript",
          value: "typescript",
        },
        {
          label: "Tutorial",
          value: "tutorial",
        },
        {
          label: "Testing",
          value: "testing",
        },
        {
          label: "SQL",
          value: "sql",
        },
        {
          label: "Snippets",
          value: "snippets",
        },
        {
          label: "Security",
          value: "security",
        },
        {
          label: "React",
          value: "react",
        },
        {
          label: "Linux",
          value: "linux",
        },
        {
          label: "Node",
          value: "node",
        },
        {
          label: "JavaScript",
          value: "javascript",
        },
        {
          label: "Design",
          value: "design",
        },
        {
          label: "authentication",
          value: "authentication",
        },
        {
          label: "Api",
          value: "api",
        },
      ],
    },
  ],
};
