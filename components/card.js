import { NextPage } from "next";

const Card = ({ book }) => {
  console.log(book);
  return (
    <>
      {book.map((item) => {
        return (
          <>
            <div className="items-center justify-center max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.volumeInfo.title}</div>
                <button className="bg-slate-400 p-2 rounded-md text-white" onClick={() => {}}>
                  Learn More
                </button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}; 

export default Card;