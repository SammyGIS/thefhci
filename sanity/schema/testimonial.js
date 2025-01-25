export default {
    name: "testimonial",
    title: "Testimonial",
    type: "document",
    fields: [
      {
        name: "text",
        title: "Text",
        type: "text",
      },
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
    ],
  };
  