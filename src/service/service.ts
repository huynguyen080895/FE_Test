import axiosClient from "../axios";
import { GET_CATEGORIES, GET_GAMES } from "../enpoints";
import { RequestCate, categoryModel, gamesModel } from "../model/modelData";
import { generateApiUrl } from "../utils";

export interface ResponseModel<T = any> {
  data: T;
  result?: IBaseResponse;
}
export interface IBaseResponse {
  statusCode: number;
  errorMessage: string;
}

export const getCategoies = () => {
  return axiosClient
    .get<ResponseModel<categoryModel[]>>(GET_CATEGORIES, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((res) => {
      return {
        data: res.data,
      };
    });
};

export const getGames = (params: RequestCate) => {
  return axiosClient
    .get<ResponseModel<gamesModel[]>>(generateApiUrl(GET_GAMES, params), {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((res) => {
      return {
        data: res.data,
      };
    });
};
