select "country"."name" as "country",
  count ("cities".*) as "totalCities"
  from "cities"
  join "countries" as "country" using ("countryId")
  group by "country"."name"
  order by "country";
