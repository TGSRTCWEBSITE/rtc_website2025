import { Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { TGSRTC } from "../constants";
import ScrollEffect from "../components/scroll-effect/scroll-effect";



function MyApp({ Component, pageProps }: AppProps) {
  // Use the dynamic title from pageProps if available, otherwise fallback to the constant.
  const pageTitle = pageProps?.title || TGSRTC;

  return (
    <Fragment>
      <Head>
        <link rel="icon" href="../favicon.ico" type="image/x-icon" />
        <title>{pageTitle}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <ScrollEffect/>
       <Footer />
    </Fragment>
  );
}

export default MyApp;
