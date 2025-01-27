export default {
  name: 'backgroundImage',
  title: 'Background Image',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Opacity',
      name: 'opacity',
      type: 'number',
      validation: (Rule) =>
        Rule.integer().min(0).max(100).warning('Should be an integer, between 0 and 100'),
    },
  ],
  preview: {
    select: {
      name: 'image.asset.originalFilename',
      media: 'image.asset',
    },
    prepare(selection) {
      return {
        title: selection.name,
        media: selection.media,
      }
    },
  },
}
