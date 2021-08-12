-- Revert testtechnique:init from pg

BEGIN;

DROP TABLE "member";

COMMIT;
