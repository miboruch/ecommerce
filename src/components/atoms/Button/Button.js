import styled, { css } from 'styled-components';

const Button = styled.button`
  width: 160px;
  height: 38px;
  color: white;
  background: #000;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: none;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-size: ${({ theme }) => theme.fontSize.xxs};

  ${({ cart }) =>
    cart &&
    css`
      width: 38px;
    `}
`;

export default Button;
