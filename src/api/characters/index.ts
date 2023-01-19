import { Choices } from "../../components/characters/Characters";
import { request } from "../request";

export const getAllCharacters = () => {
  return request({
    url: "/character",
    method: "GET",
  });
};

export const getSingleCharacter = (param: string | undefined) => {
  return request({
    url: `/character/${param}`,
    method: "GET",
  });
};

export const getMultipleCharacters = (param: number[]) => {
  return request({
    url: `/character/${param}`,
    method: "GET",
  });
};

export const getFilteredCharacters = (
  filter: Choices,
  name: string,
  page: number
) => {
  return request({
    url: `/character/?name=${name}&status=${filter.status}&gender=${filter.gender}&species=${filter.species}&page=${page}`,
    method: "GET",
  });
};

// u slucaju da se filteri ne nadovezuju na url kao gore (/character/?name=rick&status=alive)
// export const getFilteredCharacters = (param: any) => {
//   return request({
//     url: `/character/filter`,
//     method: "get",
//     data: param,
//   });
// };
//   getFilteredCharacters({name:Rick, status:Alive, order:asc})
