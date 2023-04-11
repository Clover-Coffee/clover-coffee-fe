import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import Head from "next/head";
import { CartProvider } from "@/CartContext";


function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Clover Coffee</title>
				<link rel="shortcut icon" href="/clover-logo.png" />
			</Head>
			<CartProvider>
				<Component {...pageProps} />
			</CartProvider>
		</>
	);
}

export default App;
