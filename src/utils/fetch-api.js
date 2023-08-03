import { appConfig } from '../config/app.config';

export const fetchApi = async (requestOptions = {}) => {
  try {
    let response = await fetch(`${appConfig.url}/tasks.json`);

    if (Object.entries(requestOptions).length !== 0) {
      response = await fetch(`${appConfig.url}/tasks.json`, requestOptions);
    }

    if (!response.ok) {
      throw new Error('Request failed!');
    }

    const data = await response.json();

    return data;
  } catch (err) {
    throw err;
  }
};
