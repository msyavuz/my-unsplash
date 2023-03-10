import "../styles/globals.css";
import type { AppProps } from "next/app";
import { GlobalContextProvider } from "../contexts/GlobalContext";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <GlobalContextProvider>
            <Component {...pageProps} />
        </GlobalContextProvider>
    );
}
