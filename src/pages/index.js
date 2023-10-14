import { useRouter } from "next/router";
import Main from "../components/main";

export default function IndexPage({ data }) {
  const router = useRouter();
  return (
    <Main>
      <div className="container">
        {data.map((item, index) => (
          <div
            className="item"
            onClick={() => {
              router.push(`/list/${item.list_name_encoded}`);
            }}
            key={index}
          >
            {item.display_name} &rarr;
          </div>
        ))}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-wrap: wrap;
          .item {
            white-space: nowrap;
            padding: 18px 20px;
            border: 2px solid black;
            margin: 20px;
            font-weight: bold;
            box-shadow: -4px 6px 10px -4px rgba(0, 0, 0, 0.75);
            box-sizing: border-box;
            -webkit-box-shadow: --4px 6px 10px -4px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: --4px 6px 10px -4px rgba(0, 0, 0, 0.75);
            cursor: pointer;
            transition: all 0.1s ease-in-out;
            &:hover {
              transform: scale(1.02) rotate(2deg);
            }
          }
        }
      `}</style>
    </Main>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch("https://books-api.nomadcoders.workers.dev/lists");
  const json = await res.json();
  console.log("loading");
  return { props: { data: json.results ?? [] } };
};
