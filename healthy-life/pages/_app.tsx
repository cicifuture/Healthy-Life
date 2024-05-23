import { GoalProvider } from '../context/GoalContext';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import React from 'react';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GoalProvider>
      <Component {...pageProps} />
    </GoalProvider>
  );
}

export default MyApp;
