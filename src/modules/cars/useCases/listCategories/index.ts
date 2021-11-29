import { CategoryRepositories } from "../../respositories/implementations/categoriesRepositories";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoryRepositories = CategoryRepositories.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepositories)
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase)

export { listCategoriesController }