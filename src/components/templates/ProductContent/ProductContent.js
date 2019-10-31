import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { animated } from 'react-spring';
import { createFadeIn } from '../../animations/animations';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { addProduct } from '../../../actions/cartAction';

const StyledWrapper = styled(animated.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledImpact = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  letter-spacing: 3px;
  padding-left: 1rem;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
  overflow: hidden;
`;

const StyledImageBackground = styled.div`
  width: 100%;
  height: 80vh;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${({ photoUrl }) => photoUrl});
  background-position: 30% center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.5s ease-out;

  :hover {
    transform: scale(1.8);
  }
`;

const StyledInfoBox = styled.div`
  width: 85%;
  margin: auto;

  ${({ theme }) => theme.mq.standard} {
    width: 60%;
    margin: auto;
  }
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
  padding: 2rem 0;
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

const ProductContent = ({ productData, addProduct, cartError }) => {
  const [quantity, setQuantity] = useState(1);
  const fadeIn = createFadeIn(1000, 800)();

  const { addition, id, name, photoURL, price } = productData;
  const [packTypeSelect, quantitySelect] = [useRef(null), useRef(null)];

  const setQuantityHandler = event => {
    const result = Number.parseInt(event.target.value);
    setQuantity(result);
  };

  const mouseMoveEvent = event => {
    const [pageX, pageY] = [event.pageX, event.pageY];
    const [offsetTop, offsetLeft] = [event.target.offsetTop, event.target.offsetLeft];
    const [width, height] = [event.target.offsetWidth, event.target.offsetHeight];

    event.target.style = `transform-origin: ${((pageX - offsetLeft) / width) * 100}% ${((pageY -
      offsetTop) /
      height) *
      100}%`;
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
      productPrice: price,
      totalPrice: quantity * price
    };
    addProduct(product);
  };

  return (
    <StyledWrapper style={fadeIn}>
      <StyledImpact>01/0{id}</StyledImpact>
      <ImageWrapper>
        <StyledImageBackground photoUrl={photoURL} onMouseMove={mouseMoveEvent} />
      </ImageWrapper>
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
        {cartError ? (
          <StyledParagraph small>You already have this product in your cart</StyledParagraph>
        ) : null}
        <StyledPriceParagraph>Total: {(quantity * price).toFixed(2)} USD</StyledPriceParagraph>
        <Description>
          People like consistency. Whether it’s a store or a restaurant, they want to come in and
          see what you are famous for.
        </Description>
      </StyledInfoBox>
    </StyledWrapper>
  );
};

const mapStateToProps = ({ cartReducer: { cartError } }) => {
  return { cartError };
};

const mapDispatchToProps = dispatch => {
  return {
    addProduct: product => dispatch(addProduct(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductContent);
