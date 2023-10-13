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
          width: 100%;
          margin: 0 auto;
          padding: 34px;
          box-sizing: border-box;
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
