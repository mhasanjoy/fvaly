import { IProduct } from 'Models/types';
import { Card, Col } from 'react-bootstrap';

interface IProps {
  product: IProduct;
}

const Product = (props: IProps) => {
  const { name, image } = props.product;
  return (
    <Col md={3} className="mb-3">
      <Card>
        <Card.Img
          variant="top"
          src={`${process.env.REACT_APP_IMAGE_BASE_URL}${image}`}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
