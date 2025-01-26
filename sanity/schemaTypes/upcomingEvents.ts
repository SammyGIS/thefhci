import {defineField, defineType} from 'sanity'

export const upcomingEvent = defineType({
  name: 'upcomingEvent',
  title: 'Upcoming Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Event Description',
      type: 'text',
      validation: (Rule) => Rule.max(500).optional(),
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
      name: 'eventDate',
      title: 'Event Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Event Location',
      type: 'string',
      validation: (Rule) => Rule.optional(),
    }),
    defineField({
      name: 'link',
      title: 'Event Link',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['http', 'https'],
        }).optional(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image',
    },
  },
})
