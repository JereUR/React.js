import React, { useContext } from "react";
import CrudTableRow from "./CrudTableRow";
import CrudContext from "../context/CrudContext";

const CrudTable = () => {
  const { db: data } = useContext(CrudContext);
  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Clase</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => <CrudTableRow key={el.id} el={el}></CrudTableRow>)
          ) : (
            <tr>
              <td colSpan="3">Sin Datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
