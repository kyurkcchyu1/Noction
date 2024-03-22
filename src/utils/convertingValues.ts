import { mapValues } from "lodash";
import { TMockData } from "../hooks/types";

export function convertingValues(data: TMockData) {
  return mapValues(data, (value, key) =>
    key === "REFRESH_SECRET_TTL" ? `${value}d` : value.toString(),
  );
}
