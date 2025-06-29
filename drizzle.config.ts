import { defineConfig } from "drizzle-kit"
import { env } from "@/data/env/server"

export default defineConfig({
  out: "./src/drizzle/",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DB_URL,
  },
})
