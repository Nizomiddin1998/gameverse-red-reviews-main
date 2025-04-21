import { ICategoryByIdPer, RoleDataPros } from "@/types/apis/role";
import { request } from "../api/requests";
import { ENDPOINTS } from "../endpoints";

export const getPermissions = async () => {
  return await request<Permissions | undefined>(
    ENDPOINTS.AGRO_USERS_PERMISSIONS
  );
};
export const getRole = async <T>(params: T) => {
  return await request<RoleDataPros[]>(ENDPOINTS.AGRO_USERS_ROLES, {
    params,
  });
};
export const postRole = async <T>(data: T) => {
  return await request.post(ENDPOINTS.AGRO_USERS_ROLES, data);
};
export const updateRole = async <T>(data: T, id: string) => {
  return await request.patch(ENDPOINTS.AGRO_USERS_ROLES + id, data);
};
export const getByIdRole = async (id: string | undefined) => {
  return await request<ICategoryByIdPer>(ENDPOINTS.AGRO_USERS_ROLES + id);
};
export const deleteRole = async (id: string) => {
  return await request.delete(ENDPOINTS.AGRO_USERS_ROLES + id);
};
