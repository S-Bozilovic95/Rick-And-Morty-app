import { request } from "../request";

export const getAllCharacters = () => {
  return request({
    url: "/character",
    method: "get",
  });
};

export const getSingleCharacter = (param: number) => {
  return request({
    url: `/character/${param}`,
    method: "get",
  });
};

export const getMultipleCharacters = (param: number[]) => {
  return request({
    url: `/character/${param}`,
    method: "get",
  });
};

// u slucaju da se filteri ne nadovezuje na url (/character?name=rick)
export const getFilteredCharacters = (param: any) => {
  return request({
    url: `/character/filter`,
    method: "get",
    data: param,
  });
};
//   getFilteredCharacters({name: Rick, status: Alive, order: asc})
