import '../styles/globals.css'
import { Hanken_Grotesk, Crimson_Text } from 'next/font/google';
import { useState, useEffect } from "react";
// App Router (e.g. layout.tsx or layout.jsx)
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

  useEffect(() => {
    // Set loading to false after the preloader animation
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader finishLoading={() => setIsLoading(false)} />;
  }
  return(
   <main className={`${hankenGrotesk.variable} ${crimsonText.variable}`}>
    <Component {...pageProps} />
   </main>

  )
}
