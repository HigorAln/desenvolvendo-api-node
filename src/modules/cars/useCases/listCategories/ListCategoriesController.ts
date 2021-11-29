import {Response, Request} from 'express';
import { ListCategoriesUseCase } from '../listCategories/ListCategoriesUseCase'

class ListCategoriesController {
  constructor(private listCategoryUseCase: ListCategoriesUseCase) {}
  handle(request: Request, response: Response){
    const all = this.listCategoryUseCase.execute();

    return response.status(200).json(all)
  }
}

export { ListCategoriesController }