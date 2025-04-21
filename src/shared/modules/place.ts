import { type PlaceById, type Place } from "@/types/apis/place";
import { request } from "../api/requests";
import { ENDPOINTS } from "../endpoints";

export const getPlaces = async <T>(params: T) => {
  return await request<Place[]>(ENDPOINTS.AGRO_LOCATIONS_PLACE, { params });
};

export const createPlace = async <T>(data: T) => {
  return await request.post(ENDPOINTS.AGRO_LOCATIONS_PLACE, data);
};

export const getPlaceById = async (id: string | undefined) => {
  return await request<PlaceById>(`${ENDPOINTS.AGRO_LOCATIONS_PLACE}${id}`);
};

export const updatePlace = async <T>(data: T, id: string | undefined) => {
  return await request.put(`${ENDPOINTS.AGRO_LOCATIONS_PLACE}${id}/`, data);
};

export const updateStatus = async <T>(data: T, id: string | undefined) => {
  return await request.patch(`${ENDPOINTS.AGRO_LOCATIONS_PLACE}${id}/`, data);
};
