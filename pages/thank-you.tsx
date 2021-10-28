import { NextPage } from "next";
import React, { ReactElement } from "react";
import { useForm } from "react-hook-form";
import Auth from "../layouts/Auth";
import NextPageWithLayout from "../layouts/NextPageWithLayout";

type FormValues = {
  teamName: string,
  teamLeader: string,
  teamMember1: string,
  teamMember2: string,
};

// layout for page
const ThankYou: NextPageWithLayout = () => {

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h2 className="text-blueGray-500 text-xl font-bold">
                    Sign up
                  </h2>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="relative w-full mb-3">
                    <p>Thank you for submitting your team, looking forward to seeing what you create!</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

ThankYou.getLayout = function getLayout(page: ReactElement) {
    return (
        <Auth>{page}</Auth>
    )
}

export default ThankYou;