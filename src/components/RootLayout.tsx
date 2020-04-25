import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Styles } from 'styles/base';

import Facebook from 'assets/svg/facebook.svg';
import Github from 'assets/svg/github.svg';
import Instagram from 'assets/svg/instagram.svg';
import Linkedin from 'assets/svg/linkedin.svg';
import Twitter from 'assets/svg/twitter.svg';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { HeaderLink } from 'components/HeaderLink';
import { Seo } from 'components/Seo';

const Layout = styled.div`
  display: block;
  min-height: 100vh;
`;

interface RootLayoutProps {
  children: ReactNode;
}

// eslint-disable-next-line react/display-name
export default ({ children }: RootLayoutProps) => (
  <>
    <Seo />

    <Styles />

    <Layout>
      <Header>
        <HeaderLink name="about" href="/about" />
      </Header>

      <div>{children}</div>

      <Footer
        social={[
          { icon: <Twitter />, to: 'https://twitter.com' },
          { icon: <Github />, to: 'https://github.com' },
          { icon: <Instagram />, to: 'https://www.instagram.com' },
          { icon: <Facebook />, to: 'https://www.facebook.com' },
          { icon: <Linkedin />, to: 'https://www.linkedin.com' },
        ]}
      />
    </Layout>
  </>
);
