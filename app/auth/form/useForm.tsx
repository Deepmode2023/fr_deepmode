"use client";
import { useContext, useMemo, useCallback, useEffect } from "react";
import { BreadcrompsContext } from "@/components/Breadcromps/context/BreadcropContext";
import { FormInputsConstant } from "./constants";
import { useAccessToken } from "@/shared/lib/hooks/services/use-access-token";
import { useCreateUser } from "@/shared/lib/hooks/services/use-create-user";
import { CreateSessionServices } from "@/services/api/session";
import { useRouter } from "next/navigation";
import { ResponseCreateSessionServicesType } from "@/interfaces/services/api/session";
import { sessionStorage } from "@/entities/storage";

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
      sessionStorage()?.setSession(accessTokenData.access_token);
      CreateSessionServices({
        access_token: accessTokenData.access_token,
      }).then((response: ResponseCreateSessionServicesType) => {
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
