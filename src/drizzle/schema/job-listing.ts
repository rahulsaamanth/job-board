import { JobListingApplicationTable } from "@/drizzle/schema"
import { createdAt, id, updatedAt } from "@/drizzle/schema-helpers"
import { OrganizationTable } from "@/drizzle/schema/organization"
import { relations } from "drizzle-orm"
import {
  boolean,
  index,
  integer,
  pgEnum,
  pgTable,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core"

export const wageIntervals = ["hourly", "yearly"] as const
export type WageInterval = (typeof wageIntervals)[number]
export const wageIntervalEnum = pgEnum(
  "job_listing_wage_interval",
  wageIntervals
)

export const locationRequirements = ["in-office", "remote", "hybrid"] as const
export type LocationRequirement = (typeof locationRequirements)[number]
export const locationRequirementEnum = pgEnum(
  "job_listing_location_requirement",
  locationRequirements
)

export const experienceLevels = ["junior", "mid-level", "senior"] as const
export type ExperienceLevel = (typeof experienceLevels)[number]
export const experienceLevelEnum = pgEnum(
  "job_listing_experience_level",
  experienceLevels
)

export const jobListingStatus = ["draft", "published", "delisted"] as const
export type JobListingStatus = (typeof jobListingStatus)[number]
export const jobListingStatusEnum = pgEnum(
  "job_listing_status",
  jobListingStatus
)

export const jobListingTypes = ["internship", "part-time", "full-time"] as const
export type JobListingType = (typeof jobListingTypes)[number]
export const jobListingTypeEnum = pgEnum("job_listing_type", jobListingTypes)

export const JobListingTable = pgTable(
  "job_listings",
  {
    id,
    organizationId: varchar()
      .references(() => OrganizationTable.id, { onDelete: "cascade" })
      .notNull(),
    title: varchar().notNull(),
    description: varchar().notNull(),
    wage: integer(),
    wageInterval: wageIntervalEnum(),
    stateAbbreviation: varchar(),
    city: varchar(),
    isFeatured: boolean().notNull().default(false),
    locationRequirement: locationRequirementEnum().notNull(),
    experienceLevel: experienceLevelEnum().notNull(),
    status: jobListingStatusEnum().notNull().default("draft"),
    type: jobListingTypeEnum().notNull(),
    postedAt: timestamp({ withTimezone: true }),
    createdAt,
    updatedAt,
  },
  (table) => [index().on(table.stateAbbreviation)]
)

export const jobListingRelations = relations(
  JobListingTable,
  ({ one, many }) => ({
    organization: one(OrganizationTable, {
      fields: [JobListingTable.organizationId],
      references: [OrganizationTable.id],
    }),
    applications: many(JobListingApplicationTable),
  })
)
