import axios from 'axios';

const getAuthHeaders = async () => {
  try {
    const {data} = await axios.post(
      `${process.env.API_HOST}/user/login?_format=json`,
      {
        name: process.env.USERNAME,
        pass: process.env.PASSWORD,
      }
    );
    const creds = Buffer.from(
      `${data.current_user.name}:${data.csrf_token}`
    ).toString('base64');
    const token: string = data.csrf_token;

    return {
      'Content-Type': 'application/vnd.api+json',
      csrf_token: token,
      Authorization: `Basic ${creds}`,
    };
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

export default getAuthHeaders;
