export default {
  name: "car",
  title: "Cars",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Car Name",
      type: "string",
    },
    {
      name: "year",
      title: "Year",
      type: "number",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Car Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "specs",
      title: "Specifications",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};