import { AppProps } from "next/app";
import GlobalStyle from "@src/theme/GlobalStyle";

export default function app ({ Component, pageProps }: AppProps) {
    return (
        <>
        <GlobalStyle />
        <Component {...pageProps} />
        </>
    )
}