import { NextPage } from "next";
import { Router, useRouter } from "next/router";
import React, { ReactElement } from "react";
import { useForm } from "react-hook-form";
import Auth from "../layouts/Auth";
import NextPageWithLayout from "../layouts/NextPageWithLayout";
import useEffect from 'react';

type FormValues = {
  teamName: string,
  teamLeader: string,
  teamMember1: string,
  teamMember2: string,
};

// layout for page
const Register: NextPageWithLayout = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const router = useRouter();

  React.useEffect(() => {
    register('teamName', {
      validate: (value) => value.length > 0 || 'The Team Name is required'
    });
    register('teamLeader', {
      validate: (value) => value.length > 0 || 'The Team Leader is required'
    });
  }, [register])

  const onSubmit = async (data: FormValues) => {
    console.debug('Submitting my form...');

    const res = await fetch('/api/register', {
      body: JSON.stringify({
        teamName: data.teamName,
        teamLeader: data.teamLeader,
        teamMember1: data.teamMember1,
        teamMember2: data.teamMember2,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const result = await res.json();
    router.push('/thank-you');
  }

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
                <form onSubmit={handleSubmit(onSubmit)} className="myForm">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="teamName"
                    >
                      Team Name <span className="text-red-500 text-xs">*</span>
                    </label>
                    <input
                      type="text" {...register("teamName")} id="teamName"
                      className={
                        (errors.teamName
                          ? "border-red-500 border-2 focus:border-red-500 focus:ring-red-500"
                          : "border-0"
                        ) + " px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      }
                      placeholder="Team Name"
                    />
                    { errors.teamName &&
                      <span className="flex items-center font-medium tracking-wide text-red-500 text-sm mt-1 ml-1">Team name is required</span>
                    }
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="teamLeader"
                    >
                      Team Leader <span className="text-red-500 text-xs">*</span>
                    </label>
                    <input
                      type="text" {...register("teamLeader")} id="teamLeader"
                      className={
                        (errors.teamLeader
                          ? "border-red-500 border-2 focus:border-red-500 focus:ring-red-500"
                          : "border-0"
                        ) + " px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      }
                      placeholder="Team Leader"
                    />
                    { errors.teamLeader &&
                      <span className="flex items-center font-medium tracking-wide text-red-500 text-sm mt-1 ml-1">Team leader is required</span>
                    }
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="teamMember1"
                    >
                      Team Member 1
                    </label>
                    <input
                      type="text" {...register("teamMember1")} id="teamMember1"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Team Member 1"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="teamMember2"
                    >
                      Team Member 2
                    </label>
                    <input
                      type="text" {...register("teamMember2")} id="teamMember2"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Team Member 2"
                    />
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Register.getLayout = function getLayout(page: ReactElement) {
    return (
        <Auth>{page}</Auth>
    )
}

export default Register;