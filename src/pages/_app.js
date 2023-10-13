import "../styles/reset.css";
import Header from "../components/header";
import Main from "../components/main";
import { HEADER_HEIGHT_PX } from "../constants";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div style={{ height: `${HEADER_HEIGHT_PX}px` }}></div>
      <Component {...pageProps} />
    </>
  );
}
