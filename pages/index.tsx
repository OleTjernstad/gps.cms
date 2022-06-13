import Container from "../components/container";
import Head from "next/head";
import Layout from "../layouts/blog";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next.js Blog Example</title>
      </Head>
      <div className="flex w-full space-x-12 items-end justify-end pl-8 pr-16 pt-5 pb-6 bg-gray-300">
        <img
          className="w-36 h-full"
          src="https://via.placeholder.com/137x137"
        />
        <p className="text-4xl" style={{ height: 102 }}>
          Glaamadalens Plastikbeholderes Søgeforæning
        </p>
      </div>
    </>
  );
};

export default Home;
