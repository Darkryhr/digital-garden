import React from 'react';
import Head from 'next/head';

const SEO = ({
  title = '| Gabriel does a thing',
  desc = "Gabriel's Website",
}) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content={desc} />
      <meta name='author' content='Gabriel Lellouche' />
      <link rel='apple-touch-icon' href='apple-touch-icon.jpg' />
      <link rel='shortcut icon' href='/favicon.ico' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:card' content='/card.png' />
      <meta name='twitter:site' content='@GabrielAintReal' />
      <meta name='twitter:creator' content='@GabrielAintReal' />
      <meta name='twitter:image' content='/card.png' />
      <meta property='og:title' content={title} />
      <meta property='og:site_name' content='Gabriel does a thing' />
      <meta property='og:type' content='website' />
      <meta property='og:image' content='/card.png' />
      <title>{title}</title>
    </Head>
  );
};

export default SEO;
