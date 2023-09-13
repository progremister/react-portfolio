import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2023-02-07',
  useCdn: true,
  token: import.meta.env.VITE_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: string) => builder.image(source);
