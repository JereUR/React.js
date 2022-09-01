import React from 'react'

const CrudTableRow = ({el, setDataToEdit, deleteData}) => {
    let {name, type, id} = el;

    return (
        <div>
            <tr>
                <td>{el.name}</td>
                <td>{el.type}</td>
                <td>
                    <button onClick={() => setDataToEdit(el)}>Editar</button>
                    <button onClick={() => deleteData(id)}>Eliminar</button>
                </td>
            </tr>
        </div>
    )
}

export default CrudTableRow
