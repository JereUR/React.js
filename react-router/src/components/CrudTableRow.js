import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, type, id } = el;
  let history = useHistory();

  const handleEdit = () => {
    setDataToEdit(el);
    history.push(`/editar/${id}`);
  };

  return (
    <tr>
      <td>{el.name}</td>
      <td>{el.type}</td>
      <td>
        <button onClick={handleEdit}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
