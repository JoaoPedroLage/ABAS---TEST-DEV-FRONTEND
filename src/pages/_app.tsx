import '@/styles/globals.css';
import '@/styles/mainScreen.css';
import '@/styles/listScreen.css';
import '@/styles/registrationScreen.css';
import '@/styles/accountCreated.css';
import type { AppProps } from 'next/app';
import AppProvider from '@/context/AppProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  )
}
