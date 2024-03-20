import { mapValues } from "lodash";
import { TObject } from "./types";

export function convertingValues(data: TObject) {
  return mapValues(data, (value, key) =>
    key === "REFRESH_SECRET_TTL" ? `${value}d` : value.toString(),
  );
}
