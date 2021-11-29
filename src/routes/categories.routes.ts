import { Router } from 'express';
import {CategoryRepositories} from '../respositories/categoriesRepositories'
import { CreateCategoryServices } from '../services/CreateCategoryServices';

const categoriesRoutes = Router();

const categoriesRepository = new CategoryRepositories();

categoriesRoutes.post("/", (request,response) => {
  const { name, description } = request.body;

  const categoryServices = new CreateCategoryServices(categoriesRepository);
  categoryServices.execute({name, description})
 
  return response.status(201).send();
})

categoriesRoutes.get('/', (request,response) => {
  const all = categoriesRepository.list()

  return response.status(200).json(all)
})

export { categoriesRoutes }