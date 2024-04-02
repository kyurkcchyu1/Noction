import { SubmitHandler } from "react-hook-form";
import { isEqual, mapValues, omitBy } from "lodash";

import { configDefaultValues } from "../utils";
import type { TMockData } from "./types";
import type { ConfigSerializerProps, GetConfigProps } from "../types";

export const useSubmitHandler = (data: GetConfigProps) => {
  const defaultValues = configDefaultValues(data);

  const onSubmitHandler: SubmitHandler<ConfigSerializerProps> = (
    payload: ConfigSerializerProps,
  ) => {
    const updatedValues = omitBy(payload, (value, key) =>
      isEqual(value, defaultValues[key as keyof ConfigSerializerProps]),
    );

    const convertingValues = (data: TMockData) => {
      return mapValues(data, (value, key) =>
        key === "REFRESH_SECRET_TTL" ? `${value}d` : value.toString(),
      );
    };

    const body = convertingValues(updatedValues);

    const dataForLocal = convertingValues({ ...payload, ...body });

    localStorage.setItem("data", JSON.stringify(dataForLocal));
  };

  return { onSubmitHandler };
};
