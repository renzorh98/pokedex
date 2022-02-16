import * as constantes from "./HOSTSERVER";
import axios, { AxiosRequestConfig } from "axios";

const service = axios.create({
  baseURL: constantes.POKEMON_API_SERVER,
});
/* eslint-disable */
export const get = async (
  url: string,
  params: any = {},
  options: AxiosRequestConfig = {}
): Promise<any> => {
  return service.get(url, { ...options, params });
};
