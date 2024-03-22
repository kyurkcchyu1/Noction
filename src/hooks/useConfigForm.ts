import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Inputs } from "../components/index";
import { schema } from "../components/form/validation";
import { updateValues } from "../utils/updateValues";
import { convertingValues } from "../utils/convertingValues";
import { transformData } from "../utils/transformData";
import { TBackendData } from "../data/index";

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
  } = useForm<Inputs>({
    mode: "all",
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
    setValue,
    formState: { errors, isDirty },
  };
};
