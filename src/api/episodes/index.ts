import { request } from "../request";

export const getAllEpisodes = () => {
  return request({
    url: `/episode`,
    method: "GET",
  });
};

export const getSingleEpisode = (param: string | undefined) => {
  return request({
    url: `/episode/${param}`,
    method: "GET",
  });
};

export const getMultipleEpisodes = (param: number[]) => {
  return request({
    url: `/episode/${param}`,
    method: "GET",
  });
};

export const getFilteredEpisodes = (param: any) => {
  return request({
    url: `/episode/?${param}`,
    method: "GET",
  });
};
