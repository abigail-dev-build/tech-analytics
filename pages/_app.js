import '../styles/globals.css'
import { Hanken_Grotesk, Crimson_Text } from 'next/font/google';
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Preloader from '../components/preloader';

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // include only the weights you use
  variable: '--font-hanken-grotesk',   // optional: for using as CSS variable
});
const crimsonText = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-crimson-text',
});


export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const router = useRouter();


  useEffect(() => {
    // Only show preloader on first load of the index page
    if (router.pathname === '/' || isFirstLoad) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
        setIsFirstLoad(false); // Mark first load as complete
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [router.pathname, isFirstLoad]);

  if (isLoading) {
    return <Preloader finishLoading={() => setIsLoading(false)} />;
  }
  return(
   <main className={`${hankenGrotesk.variable} ${crimsonText.variable}`}>
    <Component {...pageProps} />
   </main>

  )
}
