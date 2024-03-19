"use client";
import { Form } from "@components";
import { useConfigData } from "@hooks/useConfigData";

export default function App() {
  const { data, isLoading } = useConfigData();

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (!data) {
    return <div>No data..</div>;
  }

  return (
    <>
      {/*<SideBar />*/}
      <Form {...data} />
    </>
  );
}
