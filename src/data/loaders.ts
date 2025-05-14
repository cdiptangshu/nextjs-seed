// eslint-disable-next-line @typescript-eslint/no-unused-vars
import qs from 'qs';
import { getCmsUrl, getCmsApiKey } from '@/lib/utils';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const baseUrl = getCmsUrl();
const apiKey = getCmsApiKey();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function fetchData(url: string) {
  console.log('Fetching data:', url);

  const headers = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  };

  try {
    const response = await fetch(url, apiKey ? headers : {});

    if (!response.ok) {
      const { error } = await response.json();
      const { status, message } = error;
      throw new Error(`${status}: ${message}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch data from:', url);
    throw error;
  }
}
