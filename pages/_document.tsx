import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Head />
      <body className="bg-white text-zinc-900 selection:bg-teal-700 dark:selection:bg-teal-900 selection:text-white dark:bg-zinc-900 dark:text-white overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-zinc-100 scrollbar-track-white dark:scrollbar-thumb-zinc-800 dark:scrollbar-track-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
