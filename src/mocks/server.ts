import { setupServer } from "msw/node";
import { mockApiHandlers } from "@mocks/mockApiHandlers";

export const server = setupServer(...mockApiHandlers);
