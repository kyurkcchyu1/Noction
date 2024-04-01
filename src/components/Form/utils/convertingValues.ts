import { mapValues } from "lodash";
import type { TMockData } from "@components";


export function convertingValues(data: TMockData) {
  return mapValues(data, (value, key) =>
    key === "REFRESH_SECRET_TTL" ? `${value}d` : value.toString(),
  );
}
