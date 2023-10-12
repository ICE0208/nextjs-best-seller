export default function AboutPage() {
  return (
    <>
      <div className="container">
        <p className="title">ABOUT US</p>
        <div className="sentence">
          <p>
            Welcome to the official explorer for The New York Times Best Seller
            list explorer.
          </p>
          <p>We home you enjoy your stay!</p>
        </div>
      </div>
      <style jsx>{`
        .container {
          width: 60%;
          margin: 0 auto;
          border: 2px solid rgba(0, 0, 0, 0.15);
          padding: 34px;
          box-shadow: -9px 11px 36px -8px rgba(0, 0, 0, 0.75);
          box-sizing: border-box;
          -webkit-box-shadow: -9px 11px 36px -8px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: -9px 11px 36px -8px rgba(0, 0, 0, 0.75);
          .title {
            font-size: 34px;
            padding: 10px 0;
          }
          .sentence {
            margin: 26px 0;
            & > p {
              padding: 8px 0;
            }
          }
        }
      `}</style>
    </>
  );
}
