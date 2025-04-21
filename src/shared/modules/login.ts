import { request } from "../api/requests";
import { ENDPOINTS } from "../endpoints";

export const getSessions = async () => {
  return await request(ENDPOINTS.SESSIONS);
};

export const login = async <T>(data: T) => {
  return await request.post(ENDPOINTS.AUTH_TOKEN, data);
};
