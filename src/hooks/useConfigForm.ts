import { SubmitHandler, useForm } from "react-hook-form";
import { data, Inputs, schema, transformData } from "@components";
import { zodResolver } from "@hookform/resolvers/zod";
import _ from "lodash";

type TObject = Record<string, string | boolean | number>;

export function updateValues(initialObject: TObject, updatedObject: TObject) {
  return _.omitBy(updatedObject, (value, key) =>
    _.isEqual(value, initialObject[key]),
  );
}

export const useConfigForm = () => {
  const defaultValues = transformData(data);

  const form = useForm<Inputs>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors, isDirty },
  } = form;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const updatedValues = updateValues(defaultValues, data);
    console.log(updatedValues);
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
