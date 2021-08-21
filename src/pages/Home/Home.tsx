import Banner from 'components/home/Banner';
import Products from 'components/home/Products';
import { IProduct } from 'Models/types';
import { useState, useEffect } from 'react';
import ProductService from 'services/ProductService';

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    ProductService.getProducts().then((response) => setProducts(response));
  }, []);

  return (
    <div>
      <Banner />
      <Products products={products} />
    </div>
  );
};

export default Home;
