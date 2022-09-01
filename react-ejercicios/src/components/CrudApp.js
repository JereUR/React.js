import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
  {
    id: 3,
    name: "KillJoy",
    type: "Centinela",
  },
  {
    id: 4,
    name: "Chamber",
    type: "Centinela",
  },
  {
    id: 5,
    name: "Jett",
    type: "Duelista",
  },
  {
    id: 6,
    name: "Yoru",
    type: "Duelista",
  },
  {
    id: 7,
    name: "Raze",
    type: "Duelista",
  },
  {
    id: 8,
    name: "Astra",
    type: "Controlador",
  },
  {
    id: 9,
    name: "Brimstone",
    type: "Controlador",
  },
  {
    id: 10,
    name: "Cypher",
    type: "Centinela",
  },
  {
    id: 11,
    name: "Kayo",
    type: "Iniciador",
  },
  {
    id: 12,
    name: "Neon",
    type: "Duelista",
  },
  {
    id: 13,
    name: "Omen",
    type: "Controlador",
  },
  {
    id: 14,
    name: "Phoenix",
    type: "Duelista",
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    //console.log(data);
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );
    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>CRUD APP</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </div>
  );
};

export default CrudApp;
