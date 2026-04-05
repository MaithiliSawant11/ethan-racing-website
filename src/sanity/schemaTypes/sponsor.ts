import { defineType, defineField } from "sanity";

export default defineType({
  name: "sponsor",
  title: "Sponsor",
  type: "document",
  fields: [
    defineField({
      name: "companyName",
      title: "Company Name",
      type: "string",
    }),
    defineField({
      name: "contactPerson",
      title: "Contact Person",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
    }),

    // 🔥 Future use (display sponsors on website)
    defineField({
      name: "logo",
      title: "Company Logo",
      type: "image",
    }),
    defineField({
      name: "tier",
      title: "Sponsorship Tier",
      type: "string",
      options: {
        list: ["Title Sponsor", "Gold", "Silver", "Bronze"],
      },
    }),
  ],
});