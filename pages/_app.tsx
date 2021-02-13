import React from 'react';
import '@native-elements/core';
import './_app.css';
import 'what-input';

export function reportWebVitals(metric: any) {
  // These metrics can be sent to any analytics service
  console.log(metric);
}

const App = ({ pageProps, Component }: any) => (
  <Component {...pageProps} />
);

export default App;
