import { ArticleCard } from "../layouts/content/articleCard";
import Head from "next/head";
import { Landing } from "../layouts/content/landing";
import { MainLayout } from "../layouts/main";
import type { NextPage } from "next";
import data from "../data/posts.json";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Glaamadalen</title>
      </Head>
      <MainLayout>
        <Landing
          title="Velkommen til Geocaching foreningen GPS"
          topSection="Vi er en liten gruppe i Glåmdalsdistriktet som har som mål å finne på artige ting sammen, arrangere eventer, turer ol og støtte oppunder kvalitet fremfor kvantitet når det gjelder cacher. Vi er for øyeblikket 52 medlemmer, (geocachingnick).

              Hvis du vil bli medlem, er alt vi ber om er at du har en eller annen tilhørighet til distriktet. For å kunne ha best mulig tilbud til våre medlemmer har vi satt kontingenten til 100 kr / år / geocachingnick. Om du føler at et medlemskap ikke er verdt å betale for, så kan du fremdeles være medlem, kontingenten er frivillig.
              Foreningen startet som en venneforening 7 November 2015, senere som registrert forening 3 Desember 2016 og vi håper tilbudene vi har vil være attraktivt! Har du spørsmål er det bare å kontakte styret på: post@glaamadalen.no"
        >
          {data.posts.map((post) => (
            <ArticleCard
              ingress={post.ingress}
              tags={post.tags}
              title={post.title}
              key={post.id}
            />
          ))}
        </Landing>
      </MainLayout>
    </>
  );
};

export default Home;
