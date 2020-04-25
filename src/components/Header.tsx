import React, { ReactNode } from 'react';
import styled from 'styled-components';

import Machival from 'assets/svg/machival.svg';

import { variables } from 'styles/variables';
import { Container } from 'components/Container';

interface HeaderProps {
  children: ReactNode;
}

const HeaderRoot = styled.header`
  display: block;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  padding: ${variables.gutter} 0;
`;

const Logo = styled(Machival)`
  display: block;
  height: 50px;
  width: auto;
`;

const Navigation = styled.div`
  display: flex;
  margin-left: auto;
`;

export const Header = ({ children }: HeaderProps) => (
  <HeaderRoot>
    <Container>
      <Content>
        <a href="/">
          <Logo />
        </a>
        <Navigation>{children}</Navigation>
      </Content>
    </Container>
  </HeaderRoot>
);
