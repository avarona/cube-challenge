import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Flex, { FlexItem } from "styled-flex-component";
import styled from "styled-components";
import Container from "./Container";
import { Button } from "./Product";
import Row from "./Row";
import { selectItems, selectTotalPrice } from "../state/cart/selectors";
import { updateItem, removeItem } from "../state/cart/slice";

const CartWrapper = styled(Flex)`
  background-color: #f6f5f5;
  height: 100%;
`;

const ImageWrapper = styled.img`
  height: 75px;
  width: 100%;
`;

const ProductDetails = styled.div`
  padding: 0px 16px;
`;

const Text = styled.h4`
  margin: 0;
`;

const Input = styled.input`
  width: 3rem;
`;

const CartItem = ({ item, onUpdate, onRemove }) => {
  const [inputValue, setInputValue] = React.useState(item.quantity);
  React.useEffect(() => setInputValue(item.quantity), [item]);

  const { id } = item.product;
  const itemPrice = item.product.price * item.quantity;
  
  return (
    <Flex row>
      <FlexItem grow={1} shrink={1} basis="25%">
        <ImageWrapper src={item.product.imgUrl} alt={item.product.name} />
      </FlexItem>
      <FlexItem grow={1} shrink={1} basis="50%">
        <ProductDetails>
          <Text>{item.product.name}</Text>
          <form onSubmit={(e) => {
            e.preventDefault();
            if(inputValue < item.product.inventory) onUpdate(id, { quantity: inputValue });
            else setInputValue(item.quantity)
          }}>
            <Input type="number" value={inputValue} onChange={(e) => setInputValue(e.currentTarget.value)} />
          </form>

        </ProductDetails>
      </FlexItem>
      <FlexItem>
        <Text>{`$${itemPrice}`}</Text>
        <Button onClick={onRemove}>Remove</Button>
      </FlexItem>
    </Flex>
  );
};

const Cart = () => {
  // Event handlers
  const dispatch = useDispatch();
  const handleUpdate = (id, data) => dispatch(updateItem({ id, data }));
  const handleDelete = (id) => dispatch(removeItem({ id }));
  
  // Selectors
  const cartItems = useSelector(selectItems);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <CartWrapper column full>
      <Container>
        <h2>{`Cart (${cartItems.length})`}</h2>
        {cartItems &&
          cartItems.map((item) => (
            <Row key={item.product.id}>
              <CartItem item={item} onUpdate={handleUpdate} onRemove={() => handleDelete(item.product.id)} />
            </Row>
          ))}
        <Text>Total: {totalPrice}</Text>
      </Container>
    </CartWrapper>
  );
};

export default Cart;