"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { data, Inputs, schema, transformData } from "@components";
import { zodResolver } from "@hookform/resolvers/zod";
import { omitBy, isEqual, mapValues } from "lodash";

type TObject = Record<string, string | boolean | number>;

export function updateValues(initialObject: TObject, updatedObject: TObject) {
  return omitBy(updatedObject, (value, key) =>
    isEqual(value, initialObject[key]),
  );
}

export function convertingValues(data: TObject) {
  return mapValues(data, (value, key) =>
    key === "REFRESH_SECRET_TTL" ? `${value}d` : value.toString(),
  );
}

export const useConfigForm = () => {
  const defaultValues = transformData(data);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors, isDirty },
  } = useForm<Inputs>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const updatedValues = updateValues(defaultValues, data);
    const body = convertingValues(updatedValues);
    console.log(body);
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    watch,
    reset,
    control,
    formState: { errors, isDirty },
  };
};
