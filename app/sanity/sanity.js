import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "2aomwlx8",
  dataset: "production",
  apiVersion: "2025-01-23",
  useCdn: false,
});