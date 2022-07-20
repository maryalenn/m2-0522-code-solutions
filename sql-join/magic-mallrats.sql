select "cust"."firstName",
  "cust"."lastName"
from "customers" as "cust"
join "rentals" using ("customerId")
join "inventory" using ("inventoryId")
join "films" using ("filmId")
where "films"."title" = 'Magic Mallrats';
