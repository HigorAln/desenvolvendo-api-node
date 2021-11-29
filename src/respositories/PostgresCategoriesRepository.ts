import { CategoryProps } from "../model/Category";
import { IcategoriesRepository, ICreateCategoryDTO } from "./ICategoryRepository";


class PostgresCategoriesRepository implements IcategoriesRepository {
  
  findByName(name: string): CategoryProps {
    console.log(name);
    return null
  }
  list(): CategoryProps[] {
    return null
  }
  create({name, description}: ICreateCategoryDTO): void {
    console.log(name, description)
  }

}

export { PostgresCategoriesRepository }