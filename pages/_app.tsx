import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/tailwind.css";
 

import type { AppProps } from 'next/app'
import React, { useEffect, } from "react";
import NextPageWithLayout from "../layouts/NextPageWithLayout";
import { Router } from "next/router";

import { createViewEvent } from "../components/Boxever/BoxeverEngine";

type AppPropsWithLayout = AppProps &  {
  Component: NextPageWithLayout;
};

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`);
  console.log(`Rendering page ${window.location.href}`);
  //createViewEvent(window.location.href);
});

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  useEffect(() => {
    let comment = document.createComment(`

=========================================================
* Notus NextJS - v1.1.0 based on Tailwind Starter Kit by Creative Tim
=========================================================

* Product Page: https://www.creative-tim.com/product/notus-nextjs
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md)

* Tailwind Starter Kit Page: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

`);
    document.insertBefore(comment, document.documentElement);  }, []);

  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />);
}

export default MyApp
