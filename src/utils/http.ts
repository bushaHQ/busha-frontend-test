function Http(
  endpoint: string,
  param?: { method: string; body?: string | object }
) {
  const { method = "GET", body } = param || {};
  let url = "";

  const headers = { "content-type": "application/json" };

  const config: RequestInit = {
    method,
    headers: {
      ...headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  if (!process.env.REACT_APP_API_URL) {
    url = endpoint;
  } else {
    url = `${process.env.REACT_APP_API_URL}${endpoint}`;
  }

  return window.fetch(url, config).then(async (response) => {
    let message;
    const data = await response.json();

    if (response.ok) {
      return Promise.resolve(data);
    }

    switch (response.status) {
      case 400:
        message = "Bad Request";
        break;
      case 401:
        message = "You're not Authenticated. Kindly Login";
        break;
      case 403:
        message = "UnAuthorised User";
        break;
      case 404:
        message = "Resource not found";
        break;
      case 500:
        message = "Internal server error";
        break;
      default:
        message = "";
    }

    const errorRes = {
      ok: response.ok,
      custom_message: message,
      ...data,
    };

    await Promise.reject(errorRes);
  });
}
export { Http };
