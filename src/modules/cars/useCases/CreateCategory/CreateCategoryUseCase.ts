import { CategoryRepositories } from "../../respositories/implementations/categoriesRepositories";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor( private categoriesRepository: CategoryRepositories){}

  async execute({name, description}: IRequest): Promise<void>{
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

    if(categoryAlreadyExists){
      throw new Error("Category already exists!")
    }
  
    this.categoriesRepository.create({name, description})
  }
}

export { CreateCategoryUseCase }