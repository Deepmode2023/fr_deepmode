import { Test } from "@/components/Test/Test";
import { Toast } from "@/components/Toast/Toast";
import { ApolloWrapper } from "@/apollo_client/client_provider";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 z-0">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Toast />
        <ApolloWrapper>
          <Test />
        </ApolloWrapper>
        Deepmode
      </div>
    </main>
  );
}
