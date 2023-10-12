import Header from "../components/header";

export default function MyApp({ Component, pageProps }) {
  console.log("why");
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
