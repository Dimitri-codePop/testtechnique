-- Deploy testtechnique:init to pg

BEGIN;

CREATE TABLE "member" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "firstname" text,
    "lastname" text,
    "email" text NOT NULL UNIQUE,
    "password" text NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz,
    "deleted_at"timestamptz
);

CREATE TABLE "comments" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" text NOT NULL,
    "gitusername" text NOT NULL,
    "reposname" text NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz,
    "deleted_at"timestamptz
);

COMMIT;
