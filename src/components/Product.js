import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../state/cart/slice";
import styled from "styled-components";

const ProductWrapper = styled.div`
  padding: 24px;
  position: relative;
`;

const ImageWrapper = styled.img`
  width: 100%;
  margin-bottom: 16px;
  filter: saturate(${({ saturation }) => saturation});
`;

export const Button = styled.button`
  width: 100%;
  background: #eaf5fe;
  color: #2b99f2;
  padding: 12px 0px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  display: ${({ hide }) => hide && 'none'}
`;

const Badge = styled.span`
  background-color: ${({ color }) => color};
  color: white;
  padding: 4px 16px;
  border-radius: 16px;
  position: absolute;
  left: 36px;
  top: 36px;
  z-index: 1;
`;

const Product = (product) => {
  const dispatch = useDispatch();
  const handleAdd = (product) => dispatch(addItem({ product }));
  const badgeData = product.inventory ? { color: '#36b37e', text: 'In Stock' } : { color: 'red', text: 'Out of Stock' };
  const imageSaturation = product.inventory ? '100%' : '0%';
  return (
    <ProductWrapper>
      <Badge color={badgeData.color}>{badgeData.text}</Badge>
      <ImageWrapper src={product.imgUrl} alt={product.name} saturation={imageSaturation} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h4>${product.price}</h4>
      <Button hide={!product.inventory} onClick={() => handleAdd(product)}>Add to cart</Button>
    </ProductWrapper>
  );
};

export default Product;
