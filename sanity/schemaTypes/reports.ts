import {defineField, defineType} from 'sanity'

export const report = defineType({
  name: 'report',
  title: 'Report',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'information',
      title: 'Brief Information',
      type: 'text',
      validation: (Rule) => Rule.required().max(500),
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
      name: 'file',
      title: 'PDF File',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
      validation: (Rule) => Rule.required(),
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
