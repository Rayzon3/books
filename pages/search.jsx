import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import axios from "axios"
import Card from "../components/card";
import { getSession, useSession } from "next-auth/react";

const Search = () => {
  
  const { data: session, status } = useSession();

  if(status === "unauthenticated"){
    return(
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
          <title>Read Books!</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div >
        <h1 className="text-2xl p-4">Not Authenticated! 😕</h1>
        </div>
      </div>
    )
  }

  const [search, setSearch] = useState("")
  const [bookData, setBookData] = useState([])

  const searchBook = (event) => {
    if(event.key === "Enter"){
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyDqvcm0f6uLreBR12IE43dJplxkw_pVnps')
      .then(res=>setBookData(res.data.items))
      .catch(err=>console.log(err))
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Read Books!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-2xl p-4">Search 🔍</h1>
      <h2 className="text-2xl p-4">Hello! 😃 { session.user.name }</h2>
      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
            <input
              type="search"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Enter Book Name..."
              aria-label="Search"
              aria-describedby="button-addon3"
              value={search}
              onChange={e => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
          </div>
        </div>
      </div>
      <div>
          {
            <Card book={bookData} />
          }
        </div>
    </div>
  );
};



export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  return {
    props: {
      session,
    },
  };
};



export default Search;