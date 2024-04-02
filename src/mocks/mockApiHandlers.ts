import { rest } from "msw";
import { data } from "@components/ConfigForm/staticData";

export const mockApiHandlers = [
  rest.get("/config", (req, res, ctx) => {
    return res(ctx.json(data));
  }),
];
