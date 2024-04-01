import { isEqual, omitBy } from "lodash";
import { TMockData } from "@components";

export function updateValues(
  initialObject: TMockData,
  updatedObject: TMockData,
) {
  return omitBy(updatedObject, (value, key) =>
    isEqual(value, initialObject[key]),
  );
}
