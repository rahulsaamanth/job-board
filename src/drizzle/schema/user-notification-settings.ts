import { UserTable } from "@/drizzle/schema"
import { createdAt, updatedAt } from "@/drizzle/schema-helpers"
import { relations } from "drizzle-orm"
import { boolean, pgTable, varchar } from "drizzle-orm/pg-core"

export const UserNotificationSettingsTable = pgTable(
  "user_notification_settings",
  {
    userId: varchar()
      .primaryKey()
      .references(() => UserTable.id),
    newJobListingNotifications: boolean().notNull().default(false),
    aiPrompt: varchar(),
    createdAt,
    updatedAt,
  }
)

export const userNotificatoinsRelations = relations(
  UserNotificationSettingsTable,
  ({ one }) => ({
    user: one(UserTable, {
      fields: [UserNotificationSettingsTable.userId],
      references: [UserTable.id],
    }),
  })
)
