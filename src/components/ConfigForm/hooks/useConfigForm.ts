import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { configSchema } from "../validation";
import { configDefaultValues } from "../utils";
import { useSubmitHandler } from "./useSubmitHandler";
import type { GetConfigProps } from "../types";

export const useConfigForm = (data: GetConfigProps) => {
  const defaultValues = configDefaultValues(data);

  const { register, handleSubmit, watch, reset, control, setValue, formState } =
    useForm({
      mode: "all",
      defaultValues,
      resolver: zodResolver(configSchema),
    });

  const { onSubmitHandler } = useSubmitHandler(data);

  return {
    register,
    watch,
    reset,
    control,
    setValue,
    formState,
    handleSubmit: handleSubmit(onSubmitHandler),
  };
};
