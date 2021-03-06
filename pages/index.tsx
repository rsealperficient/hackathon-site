import Link from 'next/dist/client/link';
import Head from 'next/head'
import React, { ReactElement } from 'react';
import Auth from '../layouts/Auth';
import Landing from '../layouts/Landing';
import NextPageWithLayout from '../layouts/NextPageWithLayout';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Sitecore/Opti Hackathon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-4 h-3/4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-4 shadow-xl rounded-lg mt-16">
          <div className="px-6">
              <section className="header relative pt-16 flex h-screen max-h-860-px">
                <div className="container mx-auto flex flex-wrap">
                  <div className="w-full md:w-12/12 lg:w-8/12 xl:w-8/12 px-4">
                    <div className="pt-32 sm:pt-0">
                      <h2 className="font-semibold text-4xl text-blueGray-600">
                        Welcome to the Sitecore/Opti Next.JS Hackathon 2021
                      </h2>
                      <p className="mt-4 text-md leading-relaxed text-blueGray-500">
                        Join us for a weekend of fun and learning with Next.JS and Jamstack. This will be an internal hackathon run over 24 hours for all developers in the Sitecore/Opti BU.
                      </p>
                      <p className="mt-4 text-md leading-relaxed text-blueGray-500">
                        The hackathon will be start on Friday Dec 3rd at 12:30pm in your timezone. During Friday, there will be an open door Teams meeting that anyone can join
                        to chat, ask questions, or just hang out.
                      </p>
                      <p className="mt-4 text-md leading-relaxed text-blueGray-500">
                        You can code on your own or team up with a collegue. Each team has a maximum of 3 people. The hackathon will be focused around Next.JS and Jamstack, although the
                        final ideas will be announced an hour before the hackathon starts.
                      </p>
                      <p className="mt-4 text-md leading-relaxed text-blueGray-500">
                        More details will be added here as we finalize them.
                      </p>
                      <div className="mt-12">
                        <Link href="/register">
                          <a
                            className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-600 active:bg-blueGray-900 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150" rel="noreferrer"
                          >
                            Register a Team
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
          </div>
        </div>
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Landing>{page}</Landing>
  );
};

export default Home;
