import React from "react";

import { getCategories, getCategoryPost } from "../../components/services";
import { Post, Categories } from "../../components/index.js";

const CategoryPost = ({ posts }) => {
  return (
    <div className="container mx-auto py-8 px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="grid xl:grid-cols-2 lg:col-span-8 gap-5 col-span-1">
          {posts.map((post, index) => (
            <Post key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;

export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}
