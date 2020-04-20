import React from "react";
import { useSelector } from "react-redux";
import Flex, { FlexItem } from "styled-flex-component";
import Product from "./Product";
import Container from "./Container";
import { selectFilteredProducts } from "../state/catalog/selectors";

const Catalog = () => {
  const [inputValue, setInputValue] = React.useState('');
  const products = useSelector(selectFilteredProducts(inputValue));
  return (
    <Container>
      <input type="text" placeholder="Search for products" value={inputValue} onChange={(e) => setInputValue(e.currentTarget.value.toLowerCase())} />
      <p>{inputValue && `${products.length} Products found`}</p>
      <Flex full wrap={"true"}>
        {products.map((product) => (
          <FlexItem key={product.id} grow={1} shrink={1} basis="50%">
            <Product {...product} />
          </FlexItem>
        ))}
      </Flex>
    </Container>
  );
};

export default Catalog;
