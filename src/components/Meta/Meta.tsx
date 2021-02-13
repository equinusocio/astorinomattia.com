import React from 'react';
import Head from 'next/head';

interface IProps {
  description?: string;
  title?: string;
  children?: any;
}

export const Meta = ({ description = '[CHANGE ME] Something default description', title = '[CHANGE ME] Something Default Title', children }: IProps) => (
  <Head>
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <meta name="description" content={description} />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={title} />
    <meta name="og:description" property="og:description" content={description} />
    <meta property="og:site_name" content="Something" />
    <meta property="og:url" content="" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:site" content="Something" />
    <meta name="twitter:creator" content="Something" />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="apple-touch-icon" href="/favicon.png" />
    <meta property="og:image" content="" />
    <meta name="twitter:image" content="" />
    <link rel="canonical" href="" />
    {children}
  </Head>
);
