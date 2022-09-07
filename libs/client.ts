import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'magurodaaa',
  apiKey: process.env.API_KEY || '',
});
