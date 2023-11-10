import "../../styles/globals.css";
import { AppProps } from "next/app";
import { NavigationContextProvider } from "../../store/nav-context";
import Head from "next/head";
import SoundProvider from "../../store/sound-context";
import Layout from "../../components/layout/layout";
import { useRouter } from "next/router";
import { Amplify, AuthModeStrategyType } from "aws-amplify";
import awsExports from "@/aws-exports";
import { AuthProvider } from "../../store/auth-context";
import { SlideshowProvider } from "../../store/slideshow-context";
import "@aws-amplify/ui-react/styles.css";
import { ThemeProvider, createTheme } from "@aws-amplify/ui-react";
import studioTheme from "../ui-components/studioTheme";
import { AdminProvider } from "../../store/admin-context";
import Script from "next/script";

Amplify.configure({
  ...awsExports,
  ssr: true,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isHome =
    router.asPath === "/" || router.asPath.replace(/[^0-9]/g, "").length > 8;
  return (
    <ThemeProvider theme={studioTheme}>
      <AdminProvider>
        <SlideshowProvider>
          <AuthProvider>
            <SoundProvider>
              <NavigationContextProvider>
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-Y3HJ7PJ4TN" />
                <Script id="google-analytics">
                  {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
            
                      gtag('config', 'G-Y3HJ7PJ4TN');
                    `}
                </Script>
                <Head>
                  <title>Andrew T Dunn</title>
                  <meta
                    name="description"
                    content="Design, Development & Architecture"
                  />
                  <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, user-scalable=no"
                  />
                  <link rel="shortcut icon" href="/images/favicon.ico" />
                </Head>
                <Layout home={isHome}>
                  <Component {...pageProps} />
                </Layout>
              </NavigationContextProvider>
            </SoundProvider>
          </AuthProvider>
        </SlideshowProvider>
      </AdminProvider>
    </ThemeProvider>
  );
}
