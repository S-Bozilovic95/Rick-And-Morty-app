import { request } from "../request";

export const getAllLocations = () => {
  return request({
    url: `/location`,
    method: "GET",
  });
};

export const getSingleLocation = (param: number) => {
  return request({
    url: `/location/${param}`,
    method: "GET",
  });
};

export const getMultipleLocations = (param: number[]) => {
  return request({
    url: `/location/${param}`,
    method: "GET",
  });
};

export const getFilteredLocations = (param: any) => {
  return request({
    url: `/location/?${param}`,
    method: "GET",
  });
};
