select "film"."title",
  "film"."releaseYear",
  "genre"."name" as "genre"
  from "films" as "film"
  join "filmGenre" using ("filmId")
  join "genres" as "genre" using ("genreId")
  where "film"."title" = 'Boogie Amelie';
