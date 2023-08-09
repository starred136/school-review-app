
import About from "./about";
import Document from "./_document";

// Import css


export default function Home({ Component, pageProps }) {
  return (
    <> 
      <Document>
        <Component {...pageProps} />
      </Document> 
    </>
  )
}
