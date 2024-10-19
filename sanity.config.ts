import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

const config = defineConfig({
  projectId: "u6txb715",
  dataset: "production",
  title: "The Project Rev",
  apiVersion: "2024-10-19",
  basePath: "/admin",
  plugins: [structureTool()],
});

export default config;
