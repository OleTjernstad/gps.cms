import { Blog } from "../layouts/main";
import Head from "next/head";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Glaamadalen</title>
      </Head>
      <Blog></Blog>
    </>
  );
};

export default Home;
