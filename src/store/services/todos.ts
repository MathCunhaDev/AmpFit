import { http } from "./htttp";

const path = "/todos";

const getAll = async <T>(): Promise<T> => await http.get(path);

const getById = async (id: string) => await http.get(`${path}/${id}`);

export const TodosService = {
  getAll,
  getById,
};
