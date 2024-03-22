"use client";
import { setupWorker } from "msw";
import { mockApiHandlers } from "./mockApiHandlers";

export const worker = setupWorker(...mockApiHandlers);
