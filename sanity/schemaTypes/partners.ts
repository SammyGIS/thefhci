import {defineField, defineType} from 'sanity'

export const partner = defineType({
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'information',
      title: 'Information',
      type: 'text',
      validation: (Rule) => Rule.required().max(500),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'information',
      media: 'image',
    },
  },
})
