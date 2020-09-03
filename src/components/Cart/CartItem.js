import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeItem } from "../../action";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <p>{item.title}</p>
      <button onClick={() => dispatch(removeItem(item))}>X</button>
      <label>Quantity:</label>
      <input type="number" />
    </Wrapper>
  );
};

export default CartItem;

const Wrapper = styled.div`
  border: grey dashed 1px;
  margin: 5px;
`;

const Input = styled.input`
  width: 50px;
  height: 30px;
  margin: 5px;
`;
