select "genres"."name" as "genre",
  count ("castMembers".*) as "filmCount"
  from "castMembers"
    join "actors" using ("actorId")
    join "films" using ("filmId")
    join "filmGenre" using ("filmId")
    join "genres" using ("genreId")
    where "castMembers"."actorId" = 178
    group by "genre";
