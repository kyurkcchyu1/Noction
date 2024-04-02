"use client";
import { ConfigForm } from "@components";
import { useConfigData } from "@components/ConfigForm/hooks";

export default function ConfigurationForm() {
  const { data, isLoading } = useConfigData();

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (!data) {
    return <div>No data..</div>;
  }

  return <ConfigForm data={data} />;
}
