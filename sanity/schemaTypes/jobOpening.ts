import {defineField, defineType} from 'sanity'

export const jobOpening = defineType({
  name: 'jobOpening',
  title: 'Job Opening',
  type: 'document',
  fields: [
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'jobType',
      title: 'Job Type',
      type: 'string',
      options: {
        list: [
          {title: 'Full-time', value: 'full-time'},
          {title: 'Part-time', value: 'part-time'},
          {title: 'Contract', value: 'contract'},
          {title: 'Internship', value: 'internship'},
          {title: 'Remote', value: 'remote'},
          {title: 'Freelance', value: 'freelance'},
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
      name: 'jobDetails',
      title: 'Job Details',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Provide detailed job description and responsibilities.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Job Application Link',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['http', 'https'],
        }).optional(),
    }),
    defineField({
      name: 'deadline',
      title: 'Application Deadline',
      type: 'date',
      validation: (Rule) => Rule.optional(),
    }),
  ],
  preview: {
    select: {
      title: 'jobTitle',
      subtitle: 'location',
    },
  },
})
