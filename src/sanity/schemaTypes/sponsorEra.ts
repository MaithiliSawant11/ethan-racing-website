import { defineType, defineField } from "sanity";

export default defineType({
  name: "sponsorEra",
  title: "Sponsor Era",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Era Title",
      type: "string",
      description: "Example: ER 1.0, ER 2.0",
    }),

    defineField({
      name: "image",
      title: "Sponsors Image",
      type: "image",
    }),

    // for ordering (ER 1 → ER 9)
    defineField({
      name: "order",
      title: "Order",
      type: "number",
    }),
  ],
});