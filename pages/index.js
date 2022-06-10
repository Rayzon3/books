import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Card from "../components/card";
import {
  useSession,
  signIn,
  getProviders,
  getSession,
  signOut,
} from "next-auth/react";

const Home = ({ providers }) => {
  const bntClick = () => {
    console.log("clicked");
  };

  const { data: session } = useSession();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Read Books!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {session ? (
          <div>
            <h1 className="text-2xl p-4">Yay! 😄</h1>
            <h2>Successfully Signed In With Google</h2>
            <Link href="/search">
              <button
                className="bg-slate-400 p-2 rounded-md text-white"
                onClick={bntClick}
              >
                Search Books
              </button>
            </Link>
            <button
              className="bg-slate-400 m-2 p-2 rounded-md text-white"
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign Out!
            </button>
          </div>
        ) : (
          <div>
            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <h1 className="text-2xl p-4">Welcome! 😊</h1>
                <button
                  className="bg-slate-400 p-2 rounded-md text-white"
                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                >
                  Sign In With Google
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      providers,
      session,
    },
  };
}

{
  /* <Link href="/search">
      <button className="bg-slate-400 p-2 rounded-md text-white" onClick={bntClick}>
        Search Books 
      </button>
</Link> */
}