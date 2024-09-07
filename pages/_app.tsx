import * as React from 'react'

// used for rendering equations (optional)
import 'katex/dist/katex.min.css'
// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css'
// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'

// force push
import '../styles/globals.css'

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </>
  );
  
}

export default MyApp
