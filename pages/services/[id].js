import { servicesData } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import { Title, TitleSm } from "@/components/common/Title";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const SingleService = () => {
  const router = useRouter();
  const { id } = router.query;
  const service = servicesData?.find((post) => post.id === parseInt(id));
  console.log(service);

  return (
    <div>
      <Head>
        <title>{service?.title}</title>
      </Head>
      <section className="post-details bg-top">
        <div className="container">
          <div className="heading-title">
            {/* <br /> */}
            {/* <br /> */}
            <Title title={service?.title} className="title-bg" />
            <div className="img py">
              <img
                src={service?.cover}
                alt={service?.title}
                width="100%"
                height="100%"
                className="round"
              />
            </div>
            {service?.paragraphs?.map(({ heading, text }) => (
              <div className="desc">
                <TitleSm title={heading} />
                <p className="desc-p">{text} </p>
              </div>
            ))}
          </div>
          <div style={{margin:'2rem 0'}}>
            <Banner />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleService;
