import {
  OrganizationUserSetttingsTable,
  UserNotificationSettingsTable,
  UserResumeTable,
} from "@/drizzle/schema"
import { createdAt, updatedAt } from "@/drizzle/schema-helpers"
import { relations } from "drizzle-orm"
import { pgTable, varchar } from "drizzle-orm/pg-core"

export const UserTable = pgTable("users", {
  id: varchar().primaryKey(),
  name: varchar().notNull(),
  imageUrl: varchar().notNull(),
  email: varchar().notNull().unique(),
  createdAt,
  updatedAt,
})

export const userRaltions = relations(UserTable, ({ one, many }) => ({
  notificationSettings: one(UserNotificationSettingsTable),
  resume: one(UserResumeTable),
  organizationUserSettings: many(OrganizationUserSetttingsTable),
}))
