import * as constantes from "./HOSTSERVER";
import axios, { AxiosRequestConfig } from "axios";
import { useStore } from "vuex";
import { Pokemon } from "@/models/pokemon";

const store = useStore();

const service = axios.create({
  baseURL: constantes.POKEMON_API_SERVER,
});
export const get = async (
  url: string,
  params: any = {},
  options: AxiosRequestConfig = {}
): Promise<any> => {
  return service.get(url, { ...options, params });
};
