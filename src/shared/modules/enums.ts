import { Region } from "@/types/locations";
import { request } from "../api/requests";
import { ENDPOINTS } from "../endpoints";
import { type Companies } from "@/types/apis/company";

interface Location {
  id: string;
  name_uz: string;
  region_id: string;
  district_id: string;
}

interface Role {
  id: string;
  name: string;
  permissions: string[];
}

export const getRegions = async () => {
  return await request<Region[]>(ENDPOINTS.AGRO_LOCATIONS_REGIONS);
};

export const getDistricts = async (region_id: string) => {
  return await request<Region[]>(
    `${ENDPOINTS.AGRO_LOCATIONS_DISTRICTS}${region_id}/`
  );
};

export const getPlaces = async () => {
  return await request<Location[]>(ENDPOINTS.AGRO_LOCATIONS_PLACE);
};

export const getRoles = async () => {
  return await request<Role[]>(ENDPOINTS.AGRO_USERS_ROLES);
};

export const getCompanies = async <T>(params: T) => {
  return await request<Companies[]>(ENDPOINTS.TOOLS_COMPANIES_LIST, { params });
};
