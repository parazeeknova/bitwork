CREATE TABLE "bitwork_posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
DROP TABLE "posts" CASCADE;