import axios from 'axios';

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

export const fetchUnsplashImages = async (count: number) => {
  const response = await axios.get(`https://api.unsplash.com/photos/random`, {
    params: {
      client_id: UNSPLASH_ACCESS_KEY,
      count: count,
      query: 'sustainable development',
    },
  });

  return response.data.map((image: any) => image.urls.regular);
};
