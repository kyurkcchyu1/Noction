"use client";
import { Form } from "@components";
import { useConfigData } from "@components";

export default function ConfigForm() {
  const { data, isLoading } = useConfigData();

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (!data) {
    return <div>No data..</div>;
  }

  return <Form data={data} />;
}
