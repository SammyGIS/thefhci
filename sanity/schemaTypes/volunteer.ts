import {defineField, defineType} from 'sanity'

export const volunteer = defineType({
  name: 'volunteer',
  title: 'Volunteer Position',
  type: 'document',
  fields: [
    defineField({
      name: 'volunteerTitle',
      title: 'Volunteer Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'volunteerType',
      title: 'Volunteer Type',
      type: 'string',
      options: {
        list: [
          {title: 'One-time', value: 'one-time'},
          {title: 'Ongoing', value: 'ongoing'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.optional(),
    }),
    defineField({
      name: 'volunteerDetails',
      title: 'Volunteer Details',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Provide a brief description of the volunteer position.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Volunteer Application Link',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['http', 'https'],
        }).optional(),
    }),
    defineField({
      name: 'startDate',
      title: 'Volunteer Start Date',
      type: 'date',
      validation: (Rule) => Rule.optional(),
    }),
  ],
  preview: {
    select: {
      title: 'volunteerTitle',
      subtitle: 'location',
    },
  },
})
