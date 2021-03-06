import useAsync from 'hooks/useAsync';
import { IProduct } from 'Models/types';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ProductService from 'services/ProductService';
import imageUrlParser from 'utilities/imageUrlParser';
import { AiOutlineShoppingCart } from 'react-icons/ai';

interface IParams {
  id: string;
}

const ProductDetails = () => {
  const { id } = useParams<IParams>();
  const {
    data: product,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useAsync<IProduct>(() => ProductService.getProductByID(id));
  const { name, image, description, price } = (product || {}) as IProduct;

  return (
    <div className="product-details-component my-3">
      <Container>
        <div className="wrapper bg-white rounded border">
          {isLoading && <h3>Loading...</h3>}
          {isSuccess && (
            <Row>
              <Col md={4}>
                <img src={imageUrlParser(image)} alt={name} />
              </Col>
              <Col md={8}>
                <h3 className="mb-3">{name}</h3>
                <h1>৳{price}</h1>
                <button className="btn btn-primary">
                  <AiOutlineShoppingCart />
                  Add to Cart
                </button>
                <p className="mt-5">{description}</p>
              </Col>
            </Row>
          )}
          {isError && <h1>{error}</h1>}
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
