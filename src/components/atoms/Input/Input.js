import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledInput = styled.input`
  width: 290px;
  height: 38px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.color.secondFont};
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-size: ${({ theme }) => theme.fontSize.s};
  text-align: center;

  &::placeholder {
    font-size: ${({ theme }) => theme.fontSize.s};
    text-align: center;
    letter-spacing: 2px;
  }

  ${({ theme }) => theme.mq.standard} {
    width: 400px;
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  height: 36px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.color.secondFont};
  font-family: ${({ theme }) => theme.font.family.montserrat};

  ${({ small }) =>
    small &&
    css`
      width: 50%;
    `}
`;

const StyledOption = styled.option`
  letter-spacing: 2px;
  padding: 2rem 0;
`;

const Input = React.forwardRef(({ inputType, ...props }, ref) => {
  let element = null;

  switch (inputType) {
    case 'input':
      element = <StyledInput {...props} ref={ref} />;
      break;
    case 'select':
      element = (
        <StyledSelect ref={ref} onChange={props.onChange} {...props}>
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
  inputType: PropTypes.oneOf(['input', 'select']),
  options: PropTypes.array,
  onChange: PropTypes.func
};

Input.defaultProps = {
  inputType: 'input'
};

export default Input;
