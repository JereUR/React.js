import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Usuario = () => {
    //let params = useParams();
    //console.log(params);
    let {username} = useParams();
  return (
    <div>
      <h3>Perfil del Usuario</h3>
      <p>
        Nombre de Usuario: <b>{username}</b>
      </p>
    </div>
  );
};

export default Usuario;
