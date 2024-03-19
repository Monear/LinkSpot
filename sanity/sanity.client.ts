// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "oume7f3h",
  dataset: "production",
  apiVersion: "2024-03-19",
  useCdn: false,
};

const client = createClient(config);

export default client;