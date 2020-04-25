import React from 'react';
import { Seo } from 'components/Seo';
import { BlockText } from 'components/BlockText';
import { Link } from 'gatsby';

// eslint-disable-next-line react/display-name
export default () => (
  <>
    <Seo />

    <BlockText heading="An opinionated Gatsby starter">
      Built using TypeScript and Styled Components. A PWA with full SEO capabilities,
      making no assumption on the styling you want to apply. View all the{' '}
      <Link to="/">features</Link> here
    </BlockText>
  </>
);
