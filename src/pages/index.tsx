import React from 'react';
import { Seo } from 'components/Seo';
import { BlockText } from 'components/BlockText';

// eslint-disable-next-line react/display-name
export default () => (
  <>
    <Seo title="Home" description="An opinionated starter in Gatsby" />
    <BlockText heading="Minimal code. Maximum flexibility">
      This template evolved from the{' '}
      <a
        href="https://github.com/ueno-llc/ueno-gatsby-starter"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ueno starter
      </a>{' '}
      however removes a lot of the bespoke code used by them. It adds full PWA support and
      addresses several of the Google lighthouse issues on best practice and SEO.
    </BlockText>
    <BlockText heading="Full Feature List">
      TypeScript
      <br />
      ESLint (with standard ESLint rules)
      <br />
      Basic component structure
      <br />
      SEO with Helmet and config driven defaults
      <br />
      Styling with Styled Components
      <br />
      Progressive Web App implementation
      <br />
      Clean Google lighthouse reports
      <br />
    </BlockText>
  </>
);
