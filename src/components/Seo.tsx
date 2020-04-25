import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import Picture from 'assets/images/open-graph.jpg';

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
}

export const Seo = ({ title, description, path }: SeoProps) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  const defaults = data.site.siteMetadata;

  if (defaults.siteUrl === '' && typeof window !== 'undefined') {
    defaults.siteUrl = window.location.origin;
  }

  const titleTemplate = `%s | ${defaults.title}`;
  const url = new URL(path ?? '', defaults.siteUrl);
  description = description ?? defaults.description;

  return (
    <Helmet defaultTitle={defaults.title} titleTemplate={titleTemplate} title={title}>
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Roboto:wght@300;400&display=swap"
        rel="stylesheet"
      />
      <html lang="en" />
      <link rel="canonical" href={url.href} />
      <meta name="description" content={description} />
      <meta name="image" content={Picture} />

      <meta property="og:url" content={url.href} />
      <meta property="og:title" content={title ?? defaults.title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={Picture} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title ?? defaults.title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={Picture} />
    </Helmet>
  );
};
