import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { responsiveFont } from 'styles/utils';
import { breakpoints, variables } from 'styles/variables';
import { Container } from 'components/Container';

interface BlockTextProps {
  heading: string;
  children: ReactNode;
}

const Block = styled.div`
  padding-top: 50px;
  @media (min-width: ${breakpoints.lg}) {
    padding-top: 100px;
    max-width: 50%;
  }
`;

const Heading = styled.h3`
  ${responsiveFont(16, 18)}
  margin-bottom: 10px;
  font-family: ${variables.font.familyHeading};
`;

const Description = styled.p`
  ${responsiveFont(16, 18)}
  font-weight: 300;
  line-height: ${26 / 16};

  a {
    font-weight: 400;
    transition: 200ms opacity ease-in-out;

    &:hover {
      opacity: 0.5;
    }
  }
`;

export const BlockText = ({ heading, children }: BlockTextProps) => (
  <Container>
    <Block>
      <Heading>{heading}</Heading>
      <Description>{children}</Description>
    </Block>
  </Container>
);
