import { CategoryRepositories } from "../../respositories/implementations/categoriesRepositories";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";


const categoriesRepository = CategoryRepositories.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)

const createCategoryController = new CreateCategoryController(createCategoryUseCase)

export { createCategoryController, createCategoryUseCase } 