import { request } from "./request";

export const getCurrentPage = (
  pageNum: number,
  searchType: string,
  name: string
) => {
  return request({
    url: `/${searchType}/?${name ? `name=${name}` : ""}&page=${pageNum}`,
    method: "GET",
  });
};
