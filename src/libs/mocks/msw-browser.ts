"use client";

import { setupWorker } from "msw/browser";

import { handlers } from "./msw-handlers";
// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers);
