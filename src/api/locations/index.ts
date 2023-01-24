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
