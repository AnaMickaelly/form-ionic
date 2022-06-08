import api from '../api';

export const handleSaveUser = async (data: any) => {
  try {
    const { data: response } = await api.post('usuarios', data);

    return response;
  } catch (err) {
    console.log(err);
  }
};
