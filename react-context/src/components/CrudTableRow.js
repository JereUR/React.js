import React from "react";
import { useContext } from "react/cjs/react.development";
import CrudContext from "../context/CrudContext";

const CrudTableRow = ({el}) => {
  const {setDataToEdit, deleteData } = useContext(CrudContext);
  let { name, type, id } = el;

  return (
    <tr>
      <td>{name}</td>
      <td>{type}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
