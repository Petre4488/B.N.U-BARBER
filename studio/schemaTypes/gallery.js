export default {
    name: 'galleryImage',
    title: 'Gallery Image',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // Enables image cropping in the studio
        },
      },
      {
        name: 'alt',
        title: 'Alt Text',
        type: 'string',
      },
      {
        name: 'order',
        title: 'Order',
        type: 'number',
        description: 'The order in which the image appears in the gallery',
      },
    ],
  };
  