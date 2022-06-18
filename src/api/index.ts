import { currentEnv } from 'utils';
import { StreamerArrayType } from './types';

async function api(url: string) {
  try {
    const res = await fetch(url);
    const data: StreamerArrayType = await res.json();
    return data;
  } catch (error) {
    if (currentEnv.isDevelopment) {
      throw new Error('fetching failed');
    }
  }
}

export default api;
