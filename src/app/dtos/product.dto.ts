import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

export interface CreateProductDto extends Omit<Product, 'id' | 'categoryId'>{
  categoryId: Category['id'];
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}

export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>;
}
