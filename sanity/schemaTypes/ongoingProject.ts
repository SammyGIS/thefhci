import {defineField, defineType} from 'sanity'

export const ongoingProjects = defineType({
  name: 'ongoingProjects',
  title: 'Ongoing Projects',
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
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'How long the project has been ongoing (e.g., 3 months, 6 weeks)',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
