import { createdAt, updatedAt } from "@/drizzle/schema-helpers"
import { pgTable, varchar } from "drizzle-orm/pg-core"

export const OrganizationTable = pgTable("organizations", {
  id: varchar().primaryKey(),
  name: varchar().notNull(),
  imageUrl: varchar(),
  createdAt,
  updatedAt,
})
