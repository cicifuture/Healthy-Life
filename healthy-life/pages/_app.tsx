import { GoalProvider } from '../context/GoalContext';
import '../styles/globals.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GoalProvider>
      <Component {...pageProps} />
    </GoalProvider>
  );
}

export default MyApp;
