select "act"."firstName",
"act"."lastName"
from "actors" as "act"
join "castMembers" using ("actorId")
join "films" using ("filmId")
where "films"."title" = 'Jersey Sassy';
