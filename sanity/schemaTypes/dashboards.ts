import {defineField, defineType} from 'sanity'

export const dashboard = defineType({
  name: 'dashboard',
  title: 'Dashboard',
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
      name: 'link',
      title: 'Link',
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
      subtitle: 'information',
      media: 'image',
    },
  },
})
