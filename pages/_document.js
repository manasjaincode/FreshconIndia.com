import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="bg-white w-full h-full font-quicksand">
      <Head />
       <meta name="robots" content="noindex, nofollow" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
