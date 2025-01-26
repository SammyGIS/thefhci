import {defineField, defineType} from 'sanity'

export const imageSlider = defineType({
  name: 'imageSlider',
  title: 'Image Slider',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title || 'No title',
        media: selection.media,
      }
    },
  },
})
