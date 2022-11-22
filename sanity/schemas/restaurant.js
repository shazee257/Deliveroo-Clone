export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      title: 'Image of the Restaurant',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'lat',
      title: 'Latitude',
      type: 'number'
    },
    {
      name: 'lng',
      title: 'Longitude',
      type: 'number'
    },
    {
      name: 'address',
      title: 'Restaurant Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule) => Rule.required()
        .min(1).max(5).error('Rating must be between 1 and 5'),
    },
    {
      name: 'type',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: 'reference', to: [{ type: 'category' }],
    },
    {
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'dish' }] }],
    },










  ],
}
