import { useState, useEffect } from "react";
import { filterFilmsByDirector } from "../helpers/film.helpers";
import { getListOf } from "../helpers/film.helpers";

export default function FilmsPage() {
  const [list, setList] = useState([]);
  const [searchDirector, setSearchDirector] = useState("");

  function getFilms() {
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setList(data);
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getFilms();
  }, []);

  let filmsByDirector = filterFilmsByDirector(list, searchDirector);
  let directors = getListOf(list,"director")

  return (
    <div>
      <h1>Ghibli Films</h1>
      <form>
        <div className="form-group">
          <label htmlFor="directorSelect">Select Director: </label>
          <select
            id="directorSelect"
            value={searchDirector}
            onChange={(e) => setSearchDirector(e.target.value)}
          >
              <option value="">All</option>
              {directors.map((director,idx) => {
                return (<option key={director + idx} value={director}>{director}</option>);
              })}
          </select>
        </div>
      </form>
      <ul>
        {filmsByDirector.map((film) => {
          return (
            <li key={film.id}>
              <h3>{film.title}</h3>
              <p>{film.original_title}</p>
              <p>{film.release_date}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}


