import Image from "next/image";

export default function Detail({ data }) {
  console.log(data);
  return (
    <>
      <div className="container">
        <h1>{data.list_name}</h1>
        <div className="book-grid">
          {data.books.map((book) => (
            <div className="book-grid__item">
              <Image
                src={book.book_image}
                height={book.book_image_height}
                width={book.book_image_width}
              ></Image>
              <h3>{book.title}</h3>
              <span>{book.author}</span>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .container {
          & > h1 {
            color: red;
            font-size: 32px;
            text-align: center;
          }
        }

        .book-grid {
          display: grid;
          width: 1200px;
          grid-template-columns: repeat(4, 1fr);
          margin: 0 auto;
          margin-top: 30px;
          gap: 30px;
          background-color: rgba(255, 99, 71, 0.344);
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
