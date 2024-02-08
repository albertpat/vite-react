export function filterFilmsByDirector(list, director) {
  if (director) return list.filter((film) => film.director == director);
  else return list;
}

export function getListOf(list, prop) {
  return [...new Set(list.map((film) => film[prop] || ""))];
}

export function getFilmStats(list) {
  let acc_score = 0;
  let latest = 0;

  list.forEach((film) => {
    const score = parseInt(film.rt_score, 10);
    const releaseYear = parseInt(film.release_date, 10);

    acc_score += score;
    if (releaseYear > latest) {
      latest = releaseYear;
    }
  });

  const avg_score = list.length > 0 ? acc_score / list.length : 0;
  const total = list.length;

  return {
    avg_score,
    acc_score,
    total,
    latest,
  };
}
