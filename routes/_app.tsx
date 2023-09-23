// routes/_app.tsx
import { AppProps } from "$fresh/server.ts"

export default function App({ Component }: AppProps) {
  return (
    <html lang="ja">
      <head>
        {/* default head */}
        <meta property="og:type" content="website">
        <meta property="og:title" content="Kurisaba">
        <meta property="og:description" content="Kurisaba offical site">
        <meta property="og:site_name" content="Kurisaba">
        <meta property="og:url" content="https://kurisaba.com">
        <meta property="og:image" content="assets/Kurisaba.jpg">
        <meta property="og:locale" content="ja_JP">
        <meta name="twitter:card" content="summary">
        <meta name="twitter:title" content="Kurisaba">
        <meta name="twitter:description" content="Kurisaba offical site">
        <meta name="twitter:image" content="assets/Kurisaba.jpg">
        <meta name="twitter:creator" content="@amex2189"></meta>
      </head>
      <body>
        <Component />
      </body>
    </html>
  )
}