

import Bootstrap from "../lib/boostrap"
import About from "./about";
import Document from "./_document";

// Import css


export default function Home({ Component, pageProps }) {
  return (
    <>
      <Bootstrap>
        <Document>
          <Component {...pageProps} />
        </Document>
      </Bootstrap>
    </>
  )
}
