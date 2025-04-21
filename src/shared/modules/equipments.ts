import { type PlaceById } from "@/types/apis/place";
import { request } from "../api/requests";
import { ENDPOINTS } from "../endpoints";
import type {
  CameraTypeResponse,
  ScaleTypeResponse,
} from "@/types/apis/equipments";

export const getCameraType = async () => {
  return await request<CameraTypeResponse[]>(ENDPOINTS.CAMERA_TYPE);
};

export const getScaleType = async () => {
  return await request<ScaleTypeResponse[]>(ENDPOINTS.SCALE_TYPE);
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
