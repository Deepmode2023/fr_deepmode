import ButtonWithLoader from "@/components/Button/ButtonWithLoader";
import Loader from "@/components/Loader/Loader";
import { lazy } from "react";
import Breadcromps from "./Breadcromps/Breadcromps";

const LoaderLazy = lazy(() => import("./Loader/Loader"));
const ButtonWithLoaderLazy = lazy(() => import("./Button/ButtonWithLoader"));

export {
  LoaderLazy,
  ButtonWithLoaderLazy,
  ButtonWithLoader,
  Loader,
  Breadcromps,
};
