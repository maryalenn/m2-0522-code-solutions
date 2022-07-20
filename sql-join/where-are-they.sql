select "cust"."firstName",
  "cust"."lastName",
  "add"."line1" as "address",
  "city"."name" as "city",
  "add"."district",
  "ctry"."name" as "country"
  from "customers" as "cust"
  join "addresses" as "add" using ("addressId")
  join "cities" as "city" using ("cityId")
  join "countries" as "ctry" using ("countryId");
