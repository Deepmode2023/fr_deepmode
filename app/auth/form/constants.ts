import { FormInputsType } from "@/components/Form/Form";
export const BreadcrompsItem = [
  { title: "login", value: "LOGIN" },
  { title: "registretion", value: "REGESTRETION" },
];

export const FormInputsConstant = (formKey: string): FormInputsType[] => {
  switch (formKey) {
    case "REGESTRETION":
      return [
        {
          label: "Surname",
          name: "surname",
          placeholder: "Enter your surname",
          type: "text",
          classname: {
            container: "col-span-1",
            inputBasic: {
              input: "bg-[transparent] text-white",
              inputContainer: "border-2 p-[10px] rounded-md",
            },
          },
        },
        {
          label: "Name",
          name: "name",
          placeholder: "Enter your name",
          type: "text",
          classname: {
            container: "col-span-1",
            inputBasic: {
              input: "bg-[transparent] text-white",
              inputContainer: "border-2 p-[10px] rounded-md",
            },
          },
        },
        {
          label: "Email",
          name: "email",
          placeholder: "Enter your email",
          type: "email",
          classname: {
            container: "col-span-2",
            inputBasic: {
              input: "bg-[transparent] text-white",
              inputContainer: "border-2 p-[10px] rounded-md",
            },
          },
        },
        {
          label: "password",
          name: "password",
          type: "password",
          placeholder: "Enter your password",
          classname: {
            container: "col-span-2",
            inputBasic: {
              input: "bg-[transparent] text-white",
              inputContainer: "border-2 p-[10px] rounded-md",
            },
          },
        },
      ];

    default:
      return [
        {
          label: "Email",
          name: "username",
          placeholder: "Enter your email",
          type: "email",
          classname: {
            container: "col-span-2",
            inputBasic: {
              input: "bg-[transparent] text-white",
              inputContainer: "border-2 p-[10px] rounded-md",
            },
          },
        },
        {
          label: "password",
          name: "password",
          type: "password",
          placeholder: "Enter your username",
          classname: {
            container: "col-span-2",
            inputBasic: {
              input: "bg-[transparent] text-white",
              inputContainer: "border-2 p-[10px] rounded-md",
            },
          },
        },
      ];
  }
};
