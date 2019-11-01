import React from 'react';
import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  width: 100%;
  height: 88vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledParagraph = styled(Paragraph)`
  padding: 0 0 2rem 0;
  margin: 0;
`;

const StyledLink = styled.a`
  color: #000;
`;

const ContactContent = () => {
  return (
    <StyledWrapper>
      <Paragraph large>CONTACT</Paragraph>
      <StyledParagraph medium>
        LINKEDIN:
        <StyledLink
          href={'https://www.linkedin.com/in/michal-boruch/'}
          target='_blank'
          rel='noopener noreferrer'
        >
          Michał Boruch
        </StyledLink>
      </StyledParagraph>
      <StyledParagraph medium>
        GITHUB:
        <StyledLink href={'https://github.com/miboruch'} target='_blank' rel='noopener noreferrer'>
          miboruch
        </StyledLink>
      </StyledParagraph>
    </StyledWrapper>
  );
};

export default ContactContent;
