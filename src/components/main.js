import { HEADER_HEIGHT_PX } from "../constants";

export default function Main({ children }) {
  return (
    <>
      <main>{children}</main>
      <style jsx>{`
        main {
          position: relative;
          width: 70%;
          margin: 0 auto;
          margin-top: ${HEADER_HEIGHT_PX}px;
          margin-bottom: 100px;
          box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
          box-sizing: border-box;
          -webkit-box-shadow: -0px 0px 20px 0px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: -0px 0px 20px 0px rgba(0, 0, 0, 0.75);
        }
      `}</style>
    </>
  );
}
