import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials:{
    url: 'postgresql://ai-short-video-generator_owner:npg_ByZcjMo5CEv2@ep-withered-morning-a8tgaa3n-pooler.eastus2.azure.neon.tech/ai-short-video-generator?sslmode=require',
  }
});
