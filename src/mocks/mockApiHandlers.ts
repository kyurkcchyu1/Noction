import { rest } from "msw";
import { data } from "@components/Form/data";

export const mockApiHandlers = [
  rest.get("/config", (req, res, ctx) => {
    return res(ctx.json(data));
  }),
];
