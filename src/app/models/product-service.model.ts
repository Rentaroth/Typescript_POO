import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import { Product } from "./product.model";

export interface ProductService {
  getAll(): Promise<Product[]> | Product[];
  updateProduct(id: Product['id'], changes: UpdateProductDto): Promise<Product> | Product;
  create(dto: CreateProductDto): Promise<Product> | Product;
  findOne(id: Product['id']): Product | undefined | Promise<Product | undefined>;
}