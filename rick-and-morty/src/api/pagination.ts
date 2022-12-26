import { request } from "./request";

export const getCurrentPage = (pageNum: number, searchType: string) => {
  return request({
    url: `/${searchType}/?page=${pageNum}`,
    method: "GET",
  });
};
