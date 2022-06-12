import Link from "next/link";

const Card = ({ book }) => {
  console.log(book)
  return (
    <>
      {book.map((item) => {
        return (
          <>
            <div className="items-center justify-center max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  {item.volumeInfo.title}
                </div>
                <Link href={{
                  pathname: "/book/[id]",
                  query: {id: item.id, 
                          title: item.volumeInfo.title,
                          author: item.volumeInfo.authors,
                          thumbnailImg: item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail,
                          price: item.saleInfo.listPrice && item.saleInfo.listPrice.amount}

                }}>
                  <button
                    className="bg-slate-400 p-2 rounded-md text-white"
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Card;
