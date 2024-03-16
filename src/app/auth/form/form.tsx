"use client";
import React from "react";
import Form from "@/components/Form/Form";
import { Breadcromps } from "@/components";
import { useForm } from "./useForm";
import { BreadcrompsItem } from "./constants";

const FormStatless = () => {
  const { currentBreadcromps, action, inputs } = useForm({
    breadcrompName: "auth",
  });

  return (
    <div className="bg-dark-palette-1000 w-full col-start-2 h-full flex items-center flex-col justify-center gap-20 ">
      <div className="bg-[inherit] relative left-[-40px] w-auto border-b-2 drop-shadow-xl border-light-color1 dark:border-dark-color3 mt-5 self-start text-white">
        <Breadcromps
          cursorColor="bg-dark-palette-1000"
          breadcrompsName="auth"
          breadcrompItems={BreadcrompsItem}
        />
      </div>
      <Form
        formKey={currentBreadcromps?.breadcromp?.value}
        buttonChildren={currentBreadcromps?.breadcromp?.value}
        classname={{
          form: "px-5 my-5 bg-[transparent] w-full  text-white grid grid-cols-2 items-center space-y-0 gap-2",
          button: "bg-white dark:bg-white font-bold",
        }}
        inputs={inputs}
        action={action}
      />
    </div>
  );
};

export default FormStatless;
