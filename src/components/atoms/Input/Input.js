import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledInput = styled.input`
  width: 290px;
  height: 38px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.color.secondFont};
  font-family: ${({ theme }) => theme.font.family.montserrat};
  text-align: center;

  &::placeholder {
    font-size: ${({ theme }) => theme.fontSize.xs};
    text-align: center;
  }
`;

const StyledSelect = styled.select`
  width: 100%; //290px
  height: 36px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.color.secondFont};
  font-family: ${({ theme }) => theme.font.family.montserrat};

  ${({ quantity }) =>
    quantity &&
    css`
      width: 64px;
    `}
`;

const StyledOption = styled.option`
  letter-spacing: 2px;
  padding: 2rem 0;
`;

const Input = React.forwardRef(({ inputType, onChange, ...props }, ref) => {
  let element = null;

  switch (inputType) {
    case 'input':
      element = <StyledInput {...props} ref={ref} />;
      break;
    case 'select':
      element = (
        <StyledSelect ref={ref} onChange={onChange}>
          {props.options.map((item, index) => (
            <StyledOption value={item} key={index}>
              {item}
            </StyledOption>
          ))}
        </StyledSelect>
      );
      break;
  }

  return <>{element}</>;
});

Input.propTypes = {
  inputType: PropTypes.oneOf(['input', 'select'])
};

Input.defaultProps = {
  inputType: 'input'
};

export default Input;
