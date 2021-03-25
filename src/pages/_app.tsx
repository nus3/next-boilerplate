import { NextPage } from "next";
import { AppProps } from "next/dist/next-server/lib/router/router";
import "styles/globals.css";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
