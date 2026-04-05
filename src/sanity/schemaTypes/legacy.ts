import { defineType, defineField } from "sanity";

export default defineType({
  name: "legacy",
  title: "Team Legacy",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
  ],
});