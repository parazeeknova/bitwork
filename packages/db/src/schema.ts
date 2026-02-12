import { pgEnum, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["provider", "seeker"]);

export const profiles = pgTable("profiles", {
  id: uuid("id").primaryKey().notNull(), // References auth.users
  fullName: text("full_name"),
  role: text("role"), // Can use pgEnum if preferred, but schema used text with check
  location: text("location"),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const posts = pgTable("bitwork_posts", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});
