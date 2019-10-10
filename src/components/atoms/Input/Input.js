import React from 'react';
import styled, { css } from 'styled-components';

const StyledInput = styled.input`
  width: 290px;
  height: 38px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.color.secondFont};
  font-family: ${({ theme }) => theme.font.family.montserrat};

  &::placeholder {
    font-size: ${({ theme }) => theme.fontSize.xs};
    text-align: center;
  }

  ${({ quantity }) =>
    quantity &&
    css`
      width: 64px;
      &::placeholder {
        font-size: ${({ theme }) => theme.fontSize.xxs};
      }
    `}
`;

const StyledSelect = styled.select`
  width: 100%; //290px
  height: 36px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.color.secondFont};
  font-family: ${({ theme }) => theme.font.family.montserrat};

  &option {
    letter-spacing: 2px;
    height: 20px;
  }
`;

const StyledOption = styled.option`
  letter-spacing: 2px;
  padding: 2rem 0;
`;

const Input = ({ inputType = 'input', ...props }) => {
  let element = null;

  switch (inputType) {
    case 'input':
      element = <StyledInput {...props} />;
      break;
    case 'select':
      element = (
        <StyledSelect>
          {props.options.map((item, index) => (
            <StyledOption value={item} key={index}>
              {item}
            </StyledOption>
          ))}
        </StyledSelect>
      );
      break;
    default:
      console.log('Wrong inputType');
  }

  return <>{element}</>;
};

export default Input;
