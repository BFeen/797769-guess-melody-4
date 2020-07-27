import axios from "axios";


const Error = {
  UNAUTHORIZED: 401,
};

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: `https://4.react.pages.academy/guess_melody`,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (response.status === Error.UNAUTHORIZED) {
      onUnauthorized();

// Бросает ошибку при запросе неавторизованного пользователя, чтобы прервать цепочку промисов
// Несмотря на повторение кода, каждый случай должен отрабатывать в своем блоке. Это задел на возможные доработки в будущем.
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
