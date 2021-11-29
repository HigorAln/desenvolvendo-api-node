import { CategoryProps } from '../../model/Category'
import { ICreateCategoryDTO } from '../ICategoryRepository';

class CategoryRepositories {
  private categories: CategoryProps[]; // declarando que esse categories que seria o banco de dados so e acessivel no CategoriRepositores

  private static INSTANCE: CategoryRepositories;

  private constructor() {
    this.categories = []; // atribuindo um valor ao categories
  }

  // ele quando cria uma categoria, entra qui dentro e ele retorna sem nada... apartir daqui ele cria uma nova com o new
  // apos isso quando pede pra listar, ele ver que ja existe uma, e retorna a existente, em vez de criar uma nova
  public static getInstance(): CategoryRepositories {
    if(!CategoryRepositories.INSTANCE){
      CategoryRepositories.INSTANCE = new CategoryRepositories();
    }
    return CategoryRepositories.INSTANCE;
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