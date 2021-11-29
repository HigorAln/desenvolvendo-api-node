import { CategoryProps } from "../../model/Category";
import { CategoryRepositories } from "../../respositories/implementations/categoriesRepositories";



class ListCategoriesUseCase {
  constructor( private categoriesRepository: CategoryRepositories){}

  execute(): CategoryProps[]{
    const categories = this.categoriesRepository.list();
    return categories;
  }
}

export { ListCategoriesUseCase }