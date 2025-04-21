import { User } from "@/types/user";
import { request } from "../api/requests";
import { ENDPOINTS } from "../endpoints";

export const getUsers = async <T>(params: T) => {
  return await request(ENDPOINTS.AGRO_USERS, {
    params,
  });
};

export const createUser = async <T>(data: T) => {
  return await request.post(ENDPOINTS.AGRO_USERS, data);
};

export const updateUser = async <T>(data: T, id: string | undefined) => {
  return await request.put(`${ENDPOINTS.AGRO_USERS}${id}/`, data);
};

export const getUserById = async (id: string | undefined) => {
  return await request<User>(`${ENDPOINTS.AGRO_USERS}${id}/`);
};

export const updateUserStatus = async <T>(data: T, id: string | undefined) => {
  return await request.patch(`${ENDPOINTS.AGRO_USERS}${id}/`, data);
};
