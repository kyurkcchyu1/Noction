import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs, schema, transformData } from "@components";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateValues } from "@hooks/updateValues";
import { convertingValues } from "@hooks/convertingValues";
import { TBackendData } from "@data/types";

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
    const dataForLocal = { ...defaultValues, ...body };
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
