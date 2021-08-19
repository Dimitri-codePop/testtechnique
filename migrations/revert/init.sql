-- Revert testtechnique:init from pg

BEGIN;

DROP TABLE "member";
DROP TABLE "comments";

COMMIT;
