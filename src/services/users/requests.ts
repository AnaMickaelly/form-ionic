import api from '../api';

export const handleSaveUser = async (data: any) => {
  try {
    const { data: response } = await api.post('usuarios', data);

    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getUsers = async () => {
  try {
    const { data: response } = await api.get('usuarios');

    return response;
  } catch (err) {
    console.log(err);
  }
};
