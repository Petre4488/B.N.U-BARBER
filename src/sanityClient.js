// sanityClient.js
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: 'h8ykgze8', // Your project ID
  dataset: 'production',  // Your dataset name
  apiVersion: '2021-10-21', // Use the current date or a specific date
  useCdn: false, // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(client);
export function urlFor(source) {
  return builder.image(source);
}

export default client;
