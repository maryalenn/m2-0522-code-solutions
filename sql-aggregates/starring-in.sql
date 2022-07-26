select "genres"."name" as "genre",
  count ("castMembers".*) as "filmCount"
  from "castMembers"
    join "actors" using ("actorId")
    join "films" using ("filmId")
    join "filmGenre" using ("filmId")
    join "genres" using ("genreId")
    where "actors"."firstName" = 'Lisa' AND "actors"."lastName" = 'Monroe'
    group by "genre"
    order by "genre";
