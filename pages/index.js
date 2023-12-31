import Head from "next/head";
import { Categories, Post, Widget, Scroll } from "../components/index.js";

import { getPosts } from "../components/services";

export default function Home({ posts }) {
  return (
    <div className="container  mx-auto px-6 py-8">
      <Head>
        <title>rozprogramowany.dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <Scroll />
        <div className=" grid md:grid-cols-2 xl:grid-cols-3 lg:col-span-12 gap-5 col-span-1">
          {posts.map((posts, index) => (
            <Post post={posts.node} key={index} />
          ))}
        </div>
        {/* <div className="lg:col-span-4  col-span-1">
          <div className="lg:sticky relative top-20">
            <Widget />
            <Categories />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
    revalidate: 60,
  };
}
