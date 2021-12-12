import { Specification } from '../../entities/Specification';
import { ISpecificationsRepository, ICreateSpecificationDTO } from '../ISpecificationsRepository';


class SpecificationsRepository implements ISpecificationsRepository{
  private specifications: Specification[];

  constructor(){
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date()
    })

    this.specifications.push(specification)
  }

  findByName(name: string): Boolean {
    const specification = this.specifications.some((specification) => specification.name === name)
    return specification
  }

}

export { SpecificationsRepository }

