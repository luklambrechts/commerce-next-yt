import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
export const client = createClient({
  projectId: "se3mhdcx",
  dataset: "production",
  apiVersion: "2023-12-29",
  useCdn: true,
});

const builder = imageUrlBuilder;
