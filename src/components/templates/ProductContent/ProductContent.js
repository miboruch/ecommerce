import React, { useState, useRef, useContext } from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { OrderContext } from '../../../contexts/OrderContext';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const StyledImpact = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  letter-spacing: 3px;
  padding-left: 1rem;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const StyledInfoBox = styled.div`
  width: 85%;
  margin: auto;
`;

const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
  letter-spacing: 2px;
  text-align: right;
  margin: 1rem 0;
`;

const StyledSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.headerFont};
  letter-spacing: 2px;
  text-transform: lowercase;
  margin: 0;
  text-align: right;
`;

const StyledParagraph = styled(Paragraph)`
  text-align: right;
  padding-right: 0;
`;

const StyledPriceParagraph = styled(StyledParagraph)`
  color: ${({ theme }) => theme.color.secondFont};
`;

const Description = styled(StyledParagraph)`
  width: 95%;
  text-align: left;
`;

const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 3rem 0;
`;

const ProductContent = ({ productData }) => {
  const { state, addToCart } = useContext(OrderContext);

  const [quantity, setQuantity] = useState(1);

  const { addition, id, name, photoURL, price } = productData;
  const [packTypeSelect, quantitySelect] = [useRef(null), useRef(null)];

  const setQuantityHandler = event => {
    const result = Number.parseInt(event.target.value);
    setQuantity(result);
  };

  const setProductToCart = () => {
    const index = packTypeSelect.current.selectedIndex;
    const pack = packTypeSelect.current.options[index].text;

    const product = {
      name: name,
      addition: addition,
      id: id,
      photoURL: photoURL,
      pack: pack,
      quantity: quantity,
      productPrice: price
    };
    addToCart(product);
    console.log(state.cart);
  };

  return (
    <StyledWrapper>
      <StyledImpact>01/0{id}</StyledImpact>
      <StyledImage src={photoURL} />
      <StyledInfoBox>
        <StyledTitle>{name}</StyledTitle>
        <StyledSubtitle>{addition}</StyledSubtitle>
        <StyledParagraph>{price} USD</StyledParagraph>
        <Input inputType='select' ref={packTypeSelect} options={['Basic pack', 'Extended pack']} />
        <Flex>
          <Input
            quantity
            inputType='select'
            value={quantity}
            options={[1, 2, 3, 4, 5]}
            ref={quantitySelect}
            onChange={setQuantityHandler}
          />
          <Button onClick={setProductToCart}>add to cart</Button>
        </Flex>
        <StyledPriceParagraph>Total: {(quantity * price).toFixed(2)} USD</StyledPriceParagraph>
        <Description>
          People like consistency. Whether it’s a store or a restaurant, they want to come in and
          see what you are famous for.
        </Description>
      </StyledInfoBox>
    </StyledWrapper>
  );
};

export default ProductContent;
