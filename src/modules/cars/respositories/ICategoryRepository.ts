import { CategoryProps } from "../model/Category";


export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface IcategoriesRepository {
  findByName(name: string): Boolean;
  list(): CategoryProps[];
  create({name, description}: ICreateCategoryDTO): void;
}

export { IcategoriesRepository }