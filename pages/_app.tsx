import { AppProps } from "next/app";
import GlobalStyle from "@src/theme/GlobalStyle";
import ThemeProvider from "@src/theme/ThemeProvider";

export default function app ({ Component, pageProps }: AppProps) {
    return (
        <>
        <ThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
        </ThemeProvider>
        </>
    )
}