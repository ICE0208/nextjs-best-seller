import { useRouter } from "next/router";
import { useCallback } from "react";

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
          display: flex;
          justify-content: space-between;
          border: 1px solid;
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
