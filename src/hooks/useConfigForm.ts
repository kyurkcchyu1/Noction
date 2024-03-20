import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Inputs, schema } from "../components/index";
import { updateValues } from "./updateValues";
import { convertingValues } from "./convertingValues";
import { TBackendData } from "../data/index";
import { transformData } from "../data/transformData";

export const useConfigForm = (data: TBackendData) => {
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
    formState: { errors, isDirty },
  };
};
