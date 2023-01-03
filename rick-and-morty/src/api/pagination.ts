import { Choices } from "../components/characters/Characters";
import { request } from "./request";

export const getCurrentPage = (
  pageNum: number,
  searchType: string,
  name: string,
  filter: Choices
) => {
  let url = `/${searchType}/?page=${pageNum}`;

  if (name) {
    url += `&name=${name}`;
  }
  if (filter) {
    url += `&status=${filter.status}&gender=${filter.gender}&species=${filter.species}`;
  }

  return request({
    url: url,
    method: "GET",
  });
};
