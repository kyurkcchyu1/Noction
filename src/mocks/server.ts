import { setupServer } from "msw/node";
import { mockApiHandlers } from "./mockApiHandlers";

export const server = setupServer(...mockApiHandlers);
