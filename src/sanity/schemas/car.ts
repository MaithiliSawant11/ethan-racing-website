export default {
  name: "car",
  title: "Car",
  type: "document",
  fields: [

    {
      name: "name",
      title: "Car Name",
      type: "string"
    },

    {
      name: "weight",
      title: "Weight",
      type: "string"
    },

    {
      name: "engine",
      title: "Engine",
      type: "string"
    },

    {
      name: "topSpeed",
      title: "Top Speed",
      type: "string"
    },

    {
      name: "images",
      title: "Car Images",
      type: "array",
      of: [{ type: "image" }]
    }

  ]
}