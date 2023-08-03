

export const useRequest = () => {
  const request = async ({
    url,
    method = "GET",
    body,
    token,
    params,
    headers = {},
  }) => {
    if (token)
      headers.Authorization = `Bearer ${localStorage.getItem("token")}`;

    const options = {
      params: JSON.stringify(params),
      method,
      headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    return fetch(
      `http://192.168.0.152:8000/${url}`,
      options
    ).then((res) => res.json());
  };

  return request;
};

export default useRequest;