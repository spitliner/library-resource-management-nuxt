DROP TABLE IF EXISTS "Options" CASCADE;
DROP TABLE IF EXISTS "Groups" CASCADE;
DROP TABLE IF EXISTS "Reservations" CASCADE;
DROP TABLE IF EXISTS "Resources" CASCADE;
DROP TABLE IF EXISTS "ResourceType" CASCADE;


CREATE TABLE "Options"
(
  "id" varchar(255) NOT NULL,
  "value" jsonb
);

ALTER TABLE "Options" ADD CONSTRAINT "oid"
  PRIMARY KEY ("id")
;

CREATE TABLE "Groups"
(
  "id" varchar(15) NOT NULL,
  "name" varchar(255) NOT NULL,
  "mapID" varchar(15),
  "parentID" varchar(15) NOT NULL,
  "amenities" jsonb NOT NULL DEFAULT '{}'
);

ALTER TABLE "Groups" ADD CONSTRAINT "gid"
  PRIMARY KEY ("id");

CREATE TABLE "Reservations"
(
  "rid" varchar(15) NOT NULL,
  "date" VARCHAR(15) NOT NULL,
  "start" INTEGER NOT NULL,
  "uid" varchar(15) NOT NULL,
  "end" INTEGER NOT NULL,
  "begin" INTEGER,
  "exit" INTEGER,
  "allow" BOOLEAN NOT NULL DEFAULT true,
  "reason" TEXT CONSTRAINT "Reservation_reason" CHECK (NOT("allow" IS false AND "reason" IS NULL))
);

ALTER TABLE "Reservations" ADD CONSTRAINT "bid"
  PRIMARY KEY ("rid", "date", "start");

CREATE INDEX "Reservations_user_index" ON "Reservations" USING HASH ("uid");
CREATE INDEX "Reservations_resource_index" ON "Reservations" USING HASH ("rid");
CREATE INDEX "Reservations_date_index" ON "Reservations" USING HASH ("date");



CREATE TABLE "Resources"
(
  "id" varchar(15) NOT NULL,
  "rtype" varchar(15) NOT NULL,
  "parentID" varchar(15) NOT NULL,
  "mapID" varchar(15) NOT NULL,
  "access" INTEGER NOT NULL CONSTRAINT "Resource_access_lvl" CHECK (access >= 0 AND access < 6) DEFAULT 0,
  "name" varchar(255),
  "availability" boolean DEFAULT true,
  "amenities" jsonb
);

ALTER TABLE "Resources" ADD CONSTRAINT "rid"
  PRIMARY KEY ("id");

DROP TABLE IF EXISTS "Users" CASCADE;
CREATE TABLE "Users"
(
  "id" varchar(15) NOT NULL,
  "name" varchar(255),
  "role" varchar(15) DEFAULT 'none',
  "access" INTEGER NOT NULL CONSTRAINT "User_access_lvl" CHECK (access >= 0 AND access < 6) DEFAULT 0,
  "time" INTEGER NOT NULL DEFAULT 0
);

ALTER TABLE "Users" ADD CONSTRAINT "uid"
  PRIMARY KEY ("id");

CREATE TABLE "ResourceType"
(
  "id" varchar(15) NOT NULL,
  "name" varchar(255) NOT NULL,
  "access" INTEGER NOT NULL CONSTRAINT "Type_access_lvl" CHECK (access >= 0 AND access < 6) DEFAULT 0
);

ALTER TABLE "ResourceType" ADD CONSTRAINT "tid"
  PRIMARY KEY ("id");

ALTER TABLE "Reservations" ADD CONSTRAINT "FK_Reservations_Resource"
  FOREIGN KEY ("rid") REFERENCES "Resources" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "Reservations" ADD CONSTRAINT "FK_Reservations_User"
  FOREIGN KEY ("uid") REFERENCES "Users" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "Resources" ADD CONSTRAINT "FK_Resources_Parent"
  FOREIGN KEY ("parentID") REFERENCES "Groups" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "Resources" ADD CONSTRAINT "FK_Resources_Type"
  FOREIGN KEY ("rtype") REFERENCES "ResourceType" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
