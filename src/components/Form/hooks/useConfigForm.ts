import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { transformData, convertingValues, updateValues } from "../utils";
import { schema } from "@components";
import type { Inputs } from "@components";
import type { TBackendData } from "../data";

export const useConfigForm = (data: TBackendData) => {
  const defaultValues = transformData(data);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    setValue,
    formState: { errors, isDirty },
  } = useForm({
    mode: "all",
    defaultValues,
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    const updatedValues = updateValues(defaultValues, data);
    const body = convertingValues(updatedValues);
    const dataForLocal = convertingValues({ ...data, ...body });
    localStorage.setItem("data", JSON.stringify(dataForLocal));
    console.log(body);
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    watch,
    reset,
    control,
    setValue,
    formState: { errors, isDirty },
  };
};
