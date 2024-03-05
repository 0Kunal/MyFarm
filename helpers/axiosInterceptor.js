import axios from 'axios';

export const getAxios = () => {
  const instance = axios.create();
  instance.defaults.baseURL = 'https://sowlab.pw/assignment/user';

  // interceptors Request------------------------------------
  instance.interceptors.request.use(
    async config => {
      return config;
    },
    async error => {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    },
  );

  //validating the token expiration scenario --------------------------
  // interceptors Response------------------------------------
  instance.interceptors.response.use(
    async Response => {
      return Response;
    },
    async error => {
      if (error.response && error.response.status === 401) {
        //dispatch action using store to show token expire popup-----
        // await AsyncStorage.getItem('token');
        // window.location.pathname = "#/login";
        return new Promise((resolve, reject) => {
          reject(error);
        });
      } else {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
    },
  );

  return instance;
};
