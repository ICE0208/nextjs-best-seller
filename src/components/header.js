export default function Header() {
  return (
    <>
      <nav>
        <span>Home</span>
        <span>About</span>
      </nav>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          border: 1px solid;
          & span {
            padding: 14px;
            font-size: 22px;
            font-weight: bold;
          }
        }
      `}</style>
    </>
  );
}
