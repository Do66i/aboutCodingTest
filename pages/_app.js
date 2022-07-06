import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <span>뿌뿌려 뿌려 프롭스를 뿌려</span>
      <style jsx global>
        {`
          a {
            color: blue;
          }
        `}
      </style>
    </>
  );
}

/*
기본 형태

export default function App({ Component, pageProps }) {
  return (<Component {...pageProps} />);
}
*/
