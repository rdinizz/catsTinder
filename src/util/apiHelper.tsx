import axios from 'axios';
import Config from 'react-native-config';

export const fetchCats = async (page = 0) => {
  return await axios
    .get<any[]>(
      `https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&api_key=${Config.API_KEY}`,
    )
    .then(response => {
      return response.data;
    });
};

export const postCatVote = async (imageId: string) => {
  await axios
    .post(
      'https://api.thecatapi.com/v1/votes',
      {
        image_id: imageId,
        value: 10,
      },
      {
        headers: { 'x-api-key': `${Config.API_KEY}` },
      },
    )
    .then(() => {
      console.log('Cat liked successfully!');
    })
    .catch(err => console.error(err));
};
