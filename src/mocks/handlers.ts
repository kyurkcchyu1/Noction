import { http, HttpResponse } from "msw";
import { data } from "@data";

export const handlers = [
  http.get("/config", () => {
    return HttpResponse.json(data);
  }),
];
