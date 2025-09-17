import apiClient from "./api-client";

const singleApiClient = <T>(endpoint: string) => ({
  get: (id: number | string) =>
    apiClient.get<T>(`${endpoint}/${id}`).then(res => res.data),
});

export default singleApiClient;
