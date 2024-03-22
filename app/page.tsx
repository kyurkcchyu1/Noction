"use client";
import { Form } from "../src/components";
import { useConfigData } from "../src/hooks/useConfigData";

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
