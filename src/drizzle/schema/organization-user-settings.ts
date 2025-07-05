import { UserTable } from "@/drizzle/schema"
import { createdAt, updatedAt } from "@/drizzle/schema-helpers"
import { OrganizationTable } from "@/drizzle/schema/organization"
import { relations } from "drizzle-orm"
import {
  boolean,
  integer,
  pgTable,
  primaryKey,
  varchar,
} from "drizzle-orm/pg-core"

export const OrganizationUserSetttingsTable = pgTable(
  "organization_user_settings",
  {
    userId: varchar()
      .notNull()
      .references(() => UserTable.id),
    organizationId: varchar()
      .notNull()
      .references(() => OrganizationTable.id),
    newApplicationEnialNotifications: boolean().notNull().default(false),
    minimumRating: integer(),
    createdAt,
    updatedAt,
  },
  (table) => [primaryKey({ columns: [table.userId, table.organizationId] })]
)

export const organizationUserSettingsRelations = relations(
  OrganizationUserSetttingsTable,
  ({ one }) => ({
    user: one(UserTable, {
      fields: [OrganizationUserSetttingsTable.userId],
      references: [UserTable.id],
    }),
    organization: one(OrganizationTable, {
      fields: [OrganizationUserSetttingsTable.organizationId],
      references: [OrganizationTable.id],
    }),
  })
)
