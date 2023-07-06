import { CollectionConfig } from "payload/types";

export const Projects: CollectionConfig = {
  slug: "Projects",
  labels: {
    singular: "Project",
    plural: "Projects",
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
    listSearchableFields: ["title"],
    group: "Content",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
      admin: {
        placeholder: "Enter Project title",
      },
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      admin: { placeholder: "Enter Project slug" },
      required: true,
    },
    {
      name: "createdAt",
      type: "date",
      label: "Date Added",
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
      name: "tagline",
      label: "Tagline",
      type: "text",
      admin: { placeholder: "Enter tagline" },
      required: true,
    },
    {
      name: "url",
      label: "Url",
      type: "text",
      admin: { placeholder: "Enter project url" },
      required: true,
    },
    {
      name: "banner_img",
      label: "Banner",
      type: "text",
      admin: { placeholder: "Enter project banner image url" },
      required: true,
    },
    {
      name: 'slider',
      type: 'array',
      label: "Image Slider",
      minRows: 2,
      maxRows: 10,
      labels: {
        singular: "Slide",
        plural: "Slides",
      },
      fields: [
        {
          name: "title",
          type: "text",
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "caption",
          type: "text",
        },
      ],
    },
    {
      name: "github_url",
      label: "Github Url",
      type: "text",
      admin: { placeholder: "Enter project github url" },
      required: true,
    },
    {
      name: "highlight",
      label: "Highlight",
      type: "radio",
      options: [
        {
          label: "show",
          value: "show",
        },
        {
          label: "hide",
          value: "hide",
        },
      ],
      required: true,
    },
  ],
};
