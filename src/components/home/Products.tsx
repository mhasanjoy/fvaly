import Product from 'components/common/Product';
import { IProduct } from 'Models/types';
import { Container, Row } from 'react-bootstrap';

interface IProps {
  products: IProduct[];
}

const Products = ({ products }: IProps) => {
  return (
    <div className="my-5">
      <Container>
        <h2 className="mb-4">Latest Products</h2>
        <Row>
          {products.map((product: IProduct) => (
            <Product key={product._id} product={product} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
