import { rest } from "msw";
import { data } from "../data/index";

export const mockApiHandlers = [
  rest.get("/config", (req, res, ctx) => {
    return res(ctx.json(data));
  }),
];
