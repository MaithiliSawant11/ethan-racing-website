import { defineType, defineField } from "sanity";

export default {
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    { name: "title", type: "string" },
    { name: "location", type: "string" },
    { name: "description", type: "text" },
    {
      name: "images",
      type: "array",
      of: [{ type: "image" }],
    },
    { name: "order", type: "number" }
  ],
};

// export default defineType({
//   name: "event",
//   title: "Event",
//   type: "document",
//   fields: [
//     defineField({
//       name: "title",
//       title: "Title",
//       type: "string",
//     }),

//     defineField({
//       name: "date",
//       title: "Date",
//       type: "date",
//     }),

//     defineField({
//       name: "location",
//       title: "Location",
//       type: "string",
//     }),

//     defineField({
//       name: "description",
//       title: "Description",
//       type: "text",
//     }),

//     defineField({
//       name: "image",
//       title: "Image",
//       type: "image",
//     }),

//     // 🔥 THIS IS IMPORTANT
//     defineField({
//       name: "type",
//       title: "Event Type",
//       type: "string",
//       options: {
//         list: [
//           { title: "Upcoming", value: "upcoming" },
//           { title: "Past", value: "past" },
//         ],
//       },
//     }),
//   ],
// });