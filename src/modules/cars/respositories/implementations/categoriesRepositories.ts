import { getRepository, Repository } from 'typeorm';
import { Category } from '../../entities/Category'
import { IcategoriesRepository, ICreateCategoryDTO } from '../ICategoryRepository';

class CategoryRepositories implements IcategoriesRepository {
  // private categories: Category[]; // declarando que esse categories que seria o banco de dados so e acessivel no CategoriRepositores

  private repository: Repository<Category>;

  // private static INSTANCE: CategoryRepositories;

  constructor() {
  //   this.categories = []; // atribuindo um valor ao categories
    this.repository = getRepository(Category)
  }

  // ele quando cria uma categoria, entra qui dentro e ele retorna sem nada... apartir daqui ele cria uma nova com o new
  // apos isso quando pede pra listar, ele ver que ja existe uma, e retorna a existente, em vez de criar uma nova
  // public static getInstance(): CategoryRepositories {
  //   if(!CategoryRepositories.INSTANCE){
  //     CategoryRepositories.INSTANCE = new CategoryRepositories();
  //   }
  //   return CategoryRepositories.INSTANCE;
  // }

  async create({ description, name}: ICreateCategoryDTO): Promise<void> {
    // const category = new Category();

    // // usado para passar um objeto para a class faznedo com que o construtor da classe seja chamado ,para interar o uuid
    // Object.assign(category, {
    //   name,
    //   description,
    //   created_at: new Date()
    // })
    const category = this.repository.create({ // necessario criar um objeto no create para salvar no banco
      description,
      name
    })
  
    await this.repository.save(category)
    // this.categories.push(category)
  }

  async list(): Promise<Category[]> {
    // return this.categories;
    const category = await this.repository.find();

    return category;
  }

  async findByName(name: string): Promise<Category> {
    // const category = this.categories.some(category => category.name === name)
    const category = await this.repository.findOne({ name })
    return category
  }
}

export { CategoryRepositories }