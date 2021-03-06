import { CategoryRepositories } from "../../respositories/implementations/categoriesRepositories";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export default (): CreateCategoryController =>{
 
  const categoriesRepository = new CategoryRepositories();
  
  const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)
  
  const createCategoryController = new CreateCategoryController(createCategoryUseCase)

  return createCategoryController;
}
