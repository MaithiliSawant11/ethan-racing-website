import { defineType, defineField } from "sanity";

export default defineType({
  name: "team",
  title: "Team Member",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),

    // ✅ ADD THIS (CRITICAL FIX)
    defineField({
      name: "domain",
      title: "Domain",
      type: "string",
      options: {
        list: ["Mechanical", "Electronics", "Management", "Design"],
      },
    }),

    defineField({
      name: "year",
      title: "Year",
      type: "string",
    }),

    defineField({
      name: "linkedin",
      title: "LinkedIn",
      type: "url",
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["Core", "Tech", "Management"],
      },
    }),
  ],
});