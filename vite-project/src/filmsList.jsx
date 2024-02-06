// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

export default function FilmsList() {
  const [list, setList] = useState([]);

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

  return (
    <div>
      <h2>Ghibli Films</h2>
      <ul>
        {list.map((film) => {
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
