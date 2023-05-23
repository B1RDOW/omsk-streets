import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import Header from '@/components/layout/header/Header';
import { ThemeProvider } from 'next-themes';
import { Inter, Manrope } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

const manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-manrope',
})


export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/x-icon" />
                <meta name="charset" content="utf-8" />
                <meta property="twitter:card" content="summary" />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="Улицы Омска" />
            </Head>
            <div className={`${inter.variable} ${manrope.variable} grid min-h-screen grid-rows-[1fr_auto]`}>
                <Header />
                <Component {...pageProps} />
            </div>
        </ThemeProvider>
    )
}
