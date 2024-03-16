"use server";

import React from "react";
import Form from "./form/form";
import Image from "next/image";
import background from "@/assets/back2.jpeg";

export default async function Login() {
  return (
    <div className=" w-full min-h-100vh grid items-center justify-center grid-cols-2">
      <div className="h-[100vh] overflow-hidden relative">
        <div className="absolute h-full w-full dark:bg-dark-color3/50 bg-light-color1/50" />
        <Image
          className="w-full h-full object-cover object-left-center"
          src={background}
          alt="background_auth"
        />
      </div>
      <Form />
    </div>
  );
}
