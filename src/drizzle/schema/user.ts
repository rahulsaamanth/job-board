import { createdAt, updatedAt } from "@/drizzle/schema-helpers"
import { pgTable, varchar } from "drizzle-orm/pg-core"

export const UserTable = pgTable("users", {
  id: varchar().primaryKey(),
  name: varchar().notNull(),
  imageUrl: varchar().notNull(),
  email: varchar().notNull().unique(),
  createdAt,
  updatedAt,
})
