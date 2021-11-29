import { CategoryRepositories } from "../respositories/categoriesRepositories";
import { IcategoriesRepository } from "../respositories/ICategoryRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryServices {

  constructor( private categoriesRepository: CategoryRepositories){}

  execute({name, description}: IRequest): void{

    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if(categoryAlreadyExists){
      throw new Error("Category already exists!")
    }
  
    this.categoriesRepository.create({name, description})
  }
}

export { CreateCategoryServices }