import Head from "next/head";
import { MainLayout } from "../layouts/main";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Glaamadalen</title>
      </Head>
      <MainLayout>MainContent</MainLayout>
    </>
  );
};

export default Home;
