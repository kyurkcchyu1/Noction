import { useEffect, useState } from "react";
import { worker } from "@mocks/browser";
import { GetConfigProps } from "../types";

export const useConfigData = () => {
  const [data, setData] = useState<GetConfigProps | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const getConfig = async () => {
    setIsLoading(true);
    await worker.start();
    if (localStorage.getItem("data")) {
      const response = JSON.parse(<string>localStorage.getItem("data"));
      setData(response);
    } else {
      const response = await fetch("/config")
        .then((res) => res.json())
        .then((data) => data);
      setData(response);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getConfig();
  }, []);
  return { data, isLoading };
};
