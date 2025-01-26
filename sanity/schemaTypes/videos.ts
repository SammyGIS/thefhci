import {defineField, defineType} from 'sanity'

export const video = defineType({
  name: 'video',
  title: 'Video',
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
      validation: (Rule) => Rule.max(500).optional(),
    }),
    defineField({
      name: 'link',
      title: 'Video Link',
      type: 'url',
      validation: (Rule) =>
        Rule.required().uri({
          allowRelative: false,
          scheme: ['http', 'https'],
        }),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
})
