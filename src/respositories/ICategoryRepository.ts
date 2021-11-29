import { CategoryProps } from "../model/Category";


export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface IcategoriesRepository {
  findByName(name: string): CategoryProps;
  list(): CategoryProps[];
  create({name, description}: ICreateCategoryDTO): void;
}

export { IcategoriesRepository }