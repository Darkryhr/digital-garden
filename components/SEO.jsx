import React from 'react';
import Head from 'next/head';

const SEO = ({
  title = '| Gabriel does a thing',
  desc = "Let's be unboring",
}) => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta
        name='viewport'
        content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
      />
      <meta name='theme-color' content='#fb8b24' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content={desc} />
      <meta name='author' content='Gabriel Lellouche' />
      <link rel='apple-touch-icon' href='apple-touch-icon.jpg' />
      <link rel='shortcut icon' href='/favicon.ico' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:site' content='@GabrielAintReal' />
      <meta name='twitter:creator' content='@GabrielAintReal' />
      <meta name='twitter:image' content='https://imgur.com/xQcr8X8' />
      <meta property='og:title' content={title} />
      <meta property='og:site_name' content='Gabriel does a thing' />
      <meta property='og:type' content='website' />
      <meta
        property='og:image:secure_url'
        content='https://imgur.com/xQcr8X8'
      />
      <meta property='og:description' content={desc} />
      <title>
        {title === '| Gabriel does a thing'
          ? title
          : `${title} | Gabriel does a thing`}
      </title>
    </Head>
  );
};

export default SEO;