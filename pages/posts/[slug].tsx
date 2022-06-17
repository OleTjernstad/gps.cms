import Head from "next/head";
import Image from "next/image";
import { MainLayout } from "../../layouts/main";
import { PostLayout } from "../../layouts/content/post";
import data from "../../data/posts.json";

interface PostProps {
  post: {
    id: number;
    title: string;
    content: string;
    publishDate: string;
    Author: string;
    tags: string[];
    ingress: string;
  };
}
export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>Glaamadalen</title>
      </Head>
      <MainLayout>
        <PostLayout title={post.title} content={post.content}></PostLayout>
      </MainLayout>
    </>
  );
}

export async function getStaticProps(context: {
  params: { slug?: "" | undefined };
}) {
  const { slug = "" } = context.params;

  const post = data.posts.find((p) => p.slug === slug);

  return {
    props: { post }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const posts = data.posts;

  const paths = posts.map((post) => {
    return { params: { slug: post.slug } };
  });

  return {
    paths,
    fallback: false,
  };
}
