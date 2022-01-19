import React from 'react';
import Head from 'next/head';

const SEO = ({ title = '| Gabriel does a thing' }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content="Gabriel's Homepage" />
      <meta name='author' content='Gabriel Lellouche' />
      <link rel='apple-touch-icon' href='apple-touch-icon.jpg' />
      <link rel='shortcut icon' href='/favicon.ico' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@GabrielAintReal' />
      <meta name='twitter:creator' content='@GabrielAintReal' />
      <meta name='twitter:image' content='/card.jpg' />
      <meta property='og:site_name' content="Gabriel Lellouche's Homepage" />
      <meta property='og:type' content='website' />
      <meta property='og:image' content='/card.jpg' />
      <title>{title}</title>
    </Head>
  );
};

export default SEO;
