import axios from "axios";

import { UpdateProductDto, CreateProductDto } from "../dtos/product.dto";
import { ProductService } from "../models/product-service.model";
import { Product } from "../models/product.model";

export class ProductHttpService implements ProductService  {
  private url = 'https://api.escuelajs.co/api/v1/products';
  static instance: ProductHttpService | null = null;
  private constructor() {}

  static construct() {
    if(ProductHttpService.instance === null) {
      const newInstance = new ProductHttpService();
      return newInstance;
    }
    return ProductHttpService.instance;
  }

  async getAll() {
    const { data } = await axios.get<Product[]>(this.url);
    return data;
  }

  async updateProduct(id: Product['id'], changes: UpdateProductDto) {
    const { data } = await axios.put<Promise<Product>>(`${this.url}/${id}`, changes);
    return data;
  }

  async create(dto: CreateProductDto) {
    const { data } = await axios.post<Promise<Product>>(this.url, dto);
    return data;
  }

  async findOne(id: number) {
    const { data } = await axios.get<Promise<Product>>(`${this.url}/${id}`);
    return data;
  }
}