import "../styles/reset.css";
import Header from "../components/header";
import Main from "../components/main";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  );
}
