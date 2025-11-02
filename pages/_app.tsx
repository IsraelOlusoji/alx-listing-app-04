import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { fonts } from "@/styles/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${fonts.quicksand.variable} ${fonts.sourceSans.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}