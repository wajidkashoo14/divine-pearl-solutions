import { blogdata } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import { Title, TitleSm } from "@/components/common/Title";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const SinglePost = () => {
  const router = useRouter();
  const { id } = router.query;
  const post = blogdata.find((post) => post.id === parseInt(id));
  console.log(post, "post");

  return (
    <div>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <section className="post-details bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="TIPS & TRICKS / JANUARY 12, 2022" /> <br />
            <br />
            <Title title={post?.title} className="title-bg" />
            <div className="img py">
              <img
                src={post?.cover}
                alt={post?.title}
                width="100%"
                height="100%"
                className="round"
              />
            </div>
            <div className="desc">
              <TitleSm title={post?.subtitle} />
              <p className="desc-p">{post?.description[0]}</p>
            </div>
          </div>
          <Banner />

          <div className="heading-title">
            <div className="desc">
              <p className="desc-p">{post?.description[1]}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePost;
