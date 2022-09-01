import React from "react";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

const Productos = () => {
  //let location = useLocation();
  //console.log(location);

  let { search } = useLocation();
  let query = new URLSearchParams(search);
  //console.log(query);

  const LIMITSTART = 20;
  const LIMITEND = 1000;

  let start = parseInt(query.get("inicio")) || 1;
  let end = parseInt(query.get("fin")) || LIMITSTART;
  //console.log(start, end);

  let history = useHistory();
  //console.log(history);

  const handlePrev = (e) => {
    history.push({
      search: `?inicio=${start - LIMITSTART}&fin=${end - LIMITSTART}`,
    });
  };

  const handleNext = (e) => {
    history.push({
      search: `?inicio=${start + LIMITSTART}&fin=${end + LIMITSTART}`,
    });
  };

  return (
    <div>
      <h3>Productos</h3>
      <p>
        Mostrando productos del <b>{start}</b> al <b>{end}</b>
      </p>
      {start > LIMITSTART && <button onClick={handlePrev}>Atrás</button>}
      {end < LIMITEND && <button onClick={handleNext}>Adelante</button>}
    </div>
  );
};

export default Productos;
