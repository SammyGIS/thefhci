import {defineField, defineType} from 'sanity'

export const areaOfExpertise = defineType({
  name: 'areaOfExpertise',
  title: 'Area of Expertise',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of the area of expertise.',
      validation: (Rule) => Rule.optional(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.optional(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
