import api from '../api';
import { TOKEN_EXPIRATION, TOKEN_KEY } from '../constants';

export const handleLogin = async (data: any) => {
  try {
    const { data: response } = await api.post(
      'tokens',
      {},
      {
        headers: {
          Authorization: 'Basic ' + btoa(`${data.username}:${data.password}`),
        },
      }
    );

    localStorage.setItem(TOKEN_KEY, response.token);
    localStorage.setItem(TOKEN_EXPIRATION, response.token_expiration);

    return response;
  } catch (err) {
    console.log(err);
  }
};
