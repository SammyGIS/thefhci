import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: 'u6zormkq', // Replace with your Sanity project ID
  dataset: 'production',     // Replace with your dataset (e.g., 'production')
  apiVersion: '2022-03-07',    // Use the latest API version or match the date you prefer
  useCdn: false,                // `true` if you want to use the edge cache for faster queries
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => builder.image(source);
export const urlForAsset = (source) => builder.asset(source);