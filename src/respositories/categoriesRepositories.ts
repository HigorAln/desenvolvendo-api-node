import { CategoryProps } from '../model/Category'
import { IcategoriesRepository, ICreateCategoryDTO } from './ICategoryRepository';

class CategoryRepositories {
  private categories: CategoryProps[]; // declarando que esse categories que seria o banco de dados so e acessivel no CategoriRepositores

  constructor() {
    this.categories = []; // atribuindo um valor ao categories
  }

  create({ description, name}: ICreateCategoryDTO): void {
    const category = new CategoryProps();

    // usado para passar um objeto para a class faznedo com que o construtor da classe seja chamado ,para interar o uuid
    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    })
  
    this.categories.push(category)
  }

  list(): CategoryProps[] {
    return this.categories;
  }

  findByName(name: string): Boolean {
    const category = this.categories.some(category => category.name === name)

    return category
  }

}

export { CategoryRepositories }