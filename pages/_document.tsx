import * as React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />

        <body>
          <Main />
          <NextScript />
          <Analytics />
          <SpeedInsights />
        </body>
      </Html>
    )
  }
}
