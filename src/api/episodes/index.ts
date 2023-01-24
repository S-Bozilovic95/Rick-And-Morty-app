import { request } from "../request";

export const getAllEpisodes = () => {
  return request({
    url: `/episode`,
    method: "GET",
  });
};

export const getSingleEpisode = (param: number) => {
  return request({
    url: `/episode/${param}`,
    method: "GET",
  });
};
