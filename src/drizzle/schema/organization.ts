import {
  JobListingTable,
  OrganizationUserSetttingsTable,
} from "@/drizzle/schema"
import { createdAt, updatedAt } from "@/drizzle/schema-helpers"
import { relations } from "drizzle-orm"
import { pgTable, varchar } from "drizzle-orm/pg-core"

export const OrganizationTable = pgTable("organizations", {
  id: varchar().primaryKey(),
  name: varchar().notNull(),
  imageUrl: varchar(),
  createdAt,
  updatedAt,
})

export const organizationRelations = relations(
  OrganizationTable,
  ({ many }) => ({
    jobListings: many(JobListingTable),
    oraganizationUserSettings: many(OrganizationUserSetttingsTable),
  })
)
