import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../../reducer";

const Cart = () => {
  //const state = useSelector((state) => state);
  const storeItems = useSelector((state) => getStoreItemArray(state));
  console.log(storeItems);
  //console.log(state);

  return (
    <>
      {storeItems.length > 0 ? (
        <Wrapper>
          <Top>
            <h1>Your Cart</h1>
            <p>{storeItems.length}Items</p>
          </Top>
          <Middle>
            {storeItems.map((item) => {
              return (
                <>
                  <CartItem item={item} />
                </>
              );
            })}
          </Middle>
          <Bottom>
            <p>
              Total:
              <span>
                {storeItems
                  .map((item) => item.price)
                  .reduce((acc, value) => acc + value)}
              </span>
            </p>
            <Button>Purchase</Button>
          </Bottom>
        </Wrapper>
      ) : (
        <Wrapper>
          <h1>Cart is empty</h1>
        </Wrapper>
      )}
    </>
  );
};

export default Cart;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #67346e;
  justify-content: space-around;
  height: 100%;
  color: white;
`;
const Top = styled.div`
  margin-left: 10px;
`;
const Middle = styled.div`
  margin-left: 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 10px;
`;
const Button = styled.button`
  width: 120px;
  height: 35px;
  border-radius: 15px;
  border: none;
  margin-top: 10px;
  color: white;

  background-color: #ff1c1c;
`;
