import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Card from "../Card/Card";
import Pagination from "./Pagination";

import {setPage} from "../../redux/actions/actions";
import style from "./Cards.module.css";

export default function Cards() {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.videogames);
  
  const currentPage = useSelector((state) => state.currentPage);

  const [videogamesPerPage] = useState(15);
  const lastGameIndex = currentPage * videogamesPerPage;
  const firstGameIndex = lastGameIndex - videogamesPerPage;
  const currentGames = allVideogames.slice(firstGameIndex, lastGameIndex);

  const paginado = (currentPage) => {
    dispatch(setPage(currentPage));
  };

  console.log(currentGames);

  return (
    <div className={style.cards}>

      <Pagination
        videogamesPerPage={videogamesPerPage}
        allVideogames={allVideogames.length}
        paginado={paginado}
        currentPage={currentPage}
        setPage={setPage}
      />

      <div className={style.cardBox}>
        {currentGames.length > 0 ? (
          currentGames.map((game) => {
            return (
              <NavLink
                key={game.id}
                to={`/videogames/${game.id}`}
              >
                <Card
                  id={game.id}
                  name={game.name}
                  rating={game.rating}
                  image={game.image}
                  platforms={game.platforms}
                  genres={game.genres}
                />
              </NavLink>
            );
          })
        ) : (
          <span className={style.loader}>CARGANDO. . .</span>
        )}
      </div>
    </div>
  );
}