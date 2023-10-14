import Image from "next/image";

export default function Detail({ data }) {
  console.log(data);
  return (
    <>
      <div className="container">
        <h1>{data.list_name}</h1>
        <div className="book-grid">
          {data.books.map((book) => {
            if (
              !book.book_image ||
              !book.book_image_height ||
              !book.book_image_width ||
              !book.buy_links?.length > 0
            ) {
              return null;
            }

            return (
              <div className="book-grid__item">
                <div className="book-grid__item__img-wrapper">
                  <Image
                    className="book-grid__item__img-wrapper__image"
                    src={book.book_image}
                    height={book.book_image_height}
                    width={book.book_image_width}
                    layout="fill"
                    objectFit="cover"
                  ></Image>
                </div>
                <h3 className="grid__item__title">{book.title}</h3>
                <span className="grid__item__author">{book.author}</span>
                <div className="grid__item__link">
                  <a
                    href={book.buy_links[0].url}
                    target="_blank"
                  >
                    Pruchase
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .container {
          margin-top: 50px;
          & > h1 {
            color: black;
            font-size: 38px;
            text-align: center;
          }
        }

        .book-grid {
          display: grid;
          width: 1200px;
          grid-template-columns: repeat(4, 1fr);
          margin: 50px auto;
          margin-bottom: 100px;
          gap: 70px;
        }

        .book-grid__item {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          background-color: white;
          box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
          box-sizing: border-box;
          -webkit-box-shadow: -0px 0px 20px 0px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: -0px 0px 20px 0px rgba(0, 0, 0, 0.75);
          border: 2px solid rgba(73, 73, 73, 0.65);
          border-radius: 10px;
          overflow: hidden;
        }

        .book-grid__item__img-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 2/3;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          border-bottom: 2px solid rgba(73, 73, 73, 0.65);
          border-radius: 0 0 8px 8px;
        }

        .book-grid__item__img-wrapper__image {
        }

        .grid__item__title {
          text-align: center;
          font-size: 20px;
          font-weight: bold;
          margin-top: 10px;
          padding: 10px;
        }

        .grid__item__author {
          font-size: 18px;
          margin-bottom: 10px;
          flex-grow: 1;
        }

        .grid__item__link {
          width: 90px;
          height: 38px;
          border: 3px solid black;
          border-radius: 6px;
          background-color: rgba(244, 255, 191, 0.836);
          box-sizing: border-box;
          margin-top: 6px;
          margin-bottom: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          & > a {
            text-decoration: none;
            color: black;
            font-weight: bold;
          }
        }
      `}</style>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const {
    params: { id },
  } = context;
  console.log(id);
  const res = await fetch(
    `https://books-api.nomadcoders.workers.dev/list?name=${id}`
  );
  const json = await res.json();

  if (json.status !== "OK") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: json.results ?? [],
    },
  };
};
