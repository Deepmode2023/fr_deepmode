"use client";
import { useContext, useMemo, useCallback, useEffect } from "react";
import { BreadcrompsContext } from "@/components/Breadcromps/context/BreadcropContext";
import { FormInputsConstant } from "./constants";
import { useAccessToken } from "@/hooks/services/useAccessToken";
import { useCreateUser } from "@/hooks/services/useCreateUser";
import { CreateSessionServices } from "@/services/api/session";
import { useRouter } from "next/navigation";
import { ResponseCreateSessionServicesType } from "@/interfaces/services/api/session";

export const useForm = ({ breadcrompName }: { breadcrompName: string }) => {
  const router = useRouter();
  const { breadcromps } = useContext(BreadcrompsContext);
  const { callAPI: createUser, data: createUserData } = useCreateUser();
  const { callAPI: getAccessToken, data: accessTokenData } = useAccessToken();

  const currentBreadcromps = useMemo(() => {
    return breadcromps?.[breadcrompName] ?? {};
  }, [breadcromps, breadcrompName]);

  useEffect(() => {
    if (accessTokenData.access_token && accessTokenData.isAuth) {
      CreateSessionServices({
        access_token: accessTokenData.access_token,
        expireTime: new Date(accessTokenData.expire_time ?? ""),
      }).then((response: ResponseCreateSessionServicesType) => {
        console.log(response, "<<<<<");
        if (response.isOk) {
          router.push("/");
        }
      });
    }
  }, [accessTokenData, router]);

  const action = useCallback(
    async (formData: FormData) => {
      if (currentBreadcromps.breadcromp.value === "LOGIN") {
        await getAccessToken(formData);
      }
      if (currentBreadcromps.breadcromp.value === "REGESTRETION") {
        await createUser(formData);
      }
    },
    [currentBreadcromps, getAccessToken, createUser]
  );

  const inputs = useMemo(() => {
    return FormInputsConstant(currentBreadcromps?.breadcromp?.value) ?? [];
  }, [currentBreadcromps]);

  return useMemo(
    () => ({ currentBreadcromps, inputs, action }),
    [currentBreadcromps, inputs, action]
  );
};
