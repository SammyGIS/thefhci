import {defineField, defineType} from 'sanity'

export const internship = defineType({
  name: 'internship',
  title: 'Internship',
  type: 'document',
  fields: [
    defineField({
      name: 'internshipTitle',
      title: 'Internship Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'internshipType',
      title: 'Internship Type',
      type: 'string',
      options: {
        list: [
          {title: 'Paid', value: 'paid'},
          {title: 'Unpaid', value: 'unpaid'},
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
      name: 'internshipDetails',
      title: 'Internship Details',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Provide details on what the internship entails.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Internship Application Link',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['http', 'https'],
        }).optional(),
    }),
    defineField({
      name: 'duration',
      title: 'Internship Duration',
      type: 'string',
      validation: (Rule) => Rule.optional(),
    }),
    defineField({
      name: 'startDate',
      title: 'Internship Start Date',
      type: 'date',
      validation: (Rule) => Rule.optional(),
    }),
  ],
  preview: {
    select: {
      title: 'internshipTitle',
      subtitle: 'location',
    },
  },
})
