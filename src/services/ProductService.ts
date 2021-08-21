import { IProduct } from 'Models/types';
import requests from './httpService';

class ProductService {
  getProducts(): Promise<IProduct[]> {
    return requests.get('/product');
  }

  getProductByID(id: string): Promise<IProduct> {
    return requests.get(`/product/${id}`);
  }

  addProduct(body: IProduct): Promise<IProduct> {
    return requests.post('/product', body);
  }

  updateProduct(id: string, body: IProduct): Promise<IProduct> {
    return requests.patch(`/product/${id}`, body);
  }

  deleteProduct(id: string): Promise<IProduct> {
    return requests.delete(`/product/${id}`);
  }
}

export default new ProductService();
