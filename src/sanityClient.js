import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_DATASET,
  useCdn: true // Enable if you want to use the CDN
});

export default client;
