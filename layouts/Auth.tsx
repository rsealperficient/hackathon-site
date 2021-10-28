import React, { ReactNode } from "react";
import Footer from "../components/Footers/Footer";
import IndexNavbar from "../components/Navigation/IndexNavbar";

// components
interface IProps {
  children: ReactNode;
};

export default function Auth({ children }: IProps) {
  return (
    <>
      <IndexNavbar />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: "url('/img/register_bg_2.png')",
            }}
          ></div>
          {children}
          <Footer absolute />
        </section>
      </main>
    </>
  );
}
