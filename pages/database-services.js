import Banner from "@/components/Banner";
import { Title, TitleSm } from "@/components/common/Title";
import Head from "next/head";
import React from "react";

const DataBaseServices = () => {
  return (
    <div>
      <Head>
        <title>
          <Title title="DataBase-Services" className="title-bg" />F
        </title>
      </Head>
      <section className="post-details bg-top">
        <div className="container">
          <div className="heading-title">
            <Title title="DataBase-Services" className="title-bg" />
            <div className="img py">
              <img
                src="/images/clevel.jpg"
                alt="c-level-listing"
                width="100%"
                height="100%"
                className="round"
              />
            </div>
            <div className="desc">
              <TitleSm title="Data Appending Services" />
              <p className="desc-p">
                Success of your marketing campaign depends on the accuracy of
                your marketing database.
              </p>
              <p className="desc-p">
                Aidiscoverylabs have been in the business for a while now and
                you have accumulated a substantial database of customers which
                has been collected by you over the years. Now you wish to reach
                out to these contacts but you are not sure if your database is
                valid or as become bad.
              </p>
              <p className="desc-p">
                Aidiscoverylabs Appending services will make your database work
                for you. This is faster, quicker and the most viable option for
                any business which is running ahead of time.
              </p>
            </div>
            <div className="desc">
              <TitleSm title="Email Appending Services" />
              <p className="desc-p">
                Aidiscoverylabs appending services are unmatched and unbeaten.
                We ensure each and every email address is valid and 'in use'
                through our validation and verification process.
              </p>
              <p className="desc-p">
                The quality of email appendingdepends on the quality of
                marketing list provided by the client. The more accurate the
                details are, the better our appending services will be.
              </p>
              <p className="desc-p">
                Our service to append email address will also depend greatly on
                the specific data requirements clients have.
              </p>
            </div>
            <div className="desc">
              <TitleSm title="Phone Appending Service" />
              <p className="desc-p">
                Aidiscoverylabs adds phone numbers to client database and helps
                connecting you to your prospects. For a successful telemarketing
                campaign you need an accurate list with valid phone numbers that
                connects you with prospects.
              </p>
              <p className="desc-p">
                Aidiscoverylabs enhances your existing database by appending
                missing phone numbers and replacing wrong phone numbers with
                updated ones.
              </p>
            </div>
            <div className="desc">
              <TitleSm title="Contact Appending Service" />
              <p className="desc-p">
                Aidiscoverylabs are able to help you build a comprehensive
                contact database of key decision makers within an organization
                to connect you to desired people and also enable a good source
                of engagement within the same company. It also helps you get to
                people who are new to your business, opening new doors and
                creating new opportunities.
              </p>
              <p className="desc-p">
                TAn append on your in-house list increases your campaign scope
                and directly affects your deliverability and in-turn, you gain a
                higher ROI.
              </p>
            </div>
          </div>
          <div style={{ margin: "2rem 0" }}>
            <Banner />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataBaseServices;
