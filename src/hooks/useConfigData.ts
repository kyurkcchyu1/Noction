import { useEffect, useState } from "react";
import { worker } from "@mocks/browser";

export const useConfigData = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getConfig = async () => {
    setIsLoading(true);
    await worker.start();
    const response = await fetch("/config")
      .then((res) => res.json())
      .then((data) => data);
    setData(response);
    setIsLoading(false);
  };

  useEffect(() => {
    getConfig();
  }, []);
  return { data, isLoading };
};
