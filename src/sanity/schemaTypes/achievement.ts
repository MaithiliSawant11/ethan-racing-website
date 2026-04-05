import { defineType, defineField } from "sanity";

export default defineType({
  name: "achievement",
  title: "Achievement",
  type: "document",
  fields: [
    defineField({
      name: "year",
      title: "Year",
      type: "string",
    }),

    defineField({
      name: "category",
      title: "Competition",
      type: "string",
      options: {
        list: [
          { title: "Formula Bharat", value: "formula-bharat" },
          { title: "Supra", value: "supra" },
          { title: "BAJA", value: "baja" },
        ],
      },
    }),

    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "position",
      title: "Position",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
  name: "images",
  type: "array",
  of: [{ type: "image" }]
}),
    

    // 👇 for ordering
    defineField({
      name: "order",
      title: "Order",
      type: "number",
    }),
  ],
});