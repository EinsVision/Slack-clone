import React from 'react';
import './Header.css';
import styled from 'styled-components';

function Header() {
  return (
    <Wrapper>
      <HeaderContainer>
        Styled Components
      </HeaderContainer>
    </Wrapper>
  )
}

export default Header;

const HeaderContainer = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

