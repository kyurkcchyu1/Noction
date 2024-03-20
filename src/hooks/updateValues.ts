import { isEqual, omitBy } from "lodash";
import { TObject } from "./types";

export function updateValues(initialObject: TObject, updatedObject: TObject) {
  return omitBy(updatedObject, (value, key) =>
    isEqual(value, initialObject[key]),
  );
}
