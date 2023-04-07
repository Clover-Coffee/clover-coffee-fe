import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head >
        <title>Clover Coffee</title>
        <link
          rel="shortcut icon"
          href="/clover-logo.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
