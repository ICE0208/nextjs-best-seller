import { useRouter } from "next/router";
import { useCallback } from "react";
import { HEADER_HEIGHT_PX } from "../constants";

export default function Header() {
  const router = useRouter();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  const onClick = useCallback((path) => {
    router.push(path);
  }, []);

  return (
    <>
      <nav>
        {links.map((link) => (
          <span
            key={link.path}
            onClick={() => onClick(link.path)}
          >
            {link.name}
          </span>
        ))}
      </nav>
      <style jsx>{`
        nav {
          z-index: 100;
          position: fixed;
          width: 100%;
          height: ${HEADER_HEIGHT_PX}px;
          top: 0;
          left: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 2px solid black;
          background-color: white;
          box-sizing: border-box;
          & span {
            padding: 14px;
            font-size: 22px;
            font-weight: bold;
            cursor: pointer;
          }
        }
      `}</style>
    </>
  );
}
