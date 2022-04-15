import React from "react";
import { Card, CardImg } from "react-bootstrap";
import Rating from "./rating/Rating";

const ProductCard = ({ product }) => {
  return (
    <>
      <Card className="p-3 my-3 rounded-md">
        <a href={`/product/${product._id}`}>
          <CardImg src={product.image} variant="top"></CardImg>
        </a>
        <Card.Body>
          <a href={`/product/${product._id}`}>
            <Card.Title as="div" className="h-11 line-clamp-2">
              {product.name}
            </Card.Title>
          </a>
          <Card.Text as="div" className="my-3">
            <Rating value={product.rating} text={product.numReviews} />
            {/* {product.rating} from {product.numReviews} */}
          </Card.Text>
          <Card.Text as="h3">{product.price} &#2547;</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
