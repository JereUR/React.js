import React, { useState } from 'react';

/* export default function Formularios(){
    const [nombre, setNombre] = useState("");
    const [sabor, setSabor] = useState("");
    const [lenguaje, setLenguaje] = useState("");
    const [terminos, setTerminos] = useState(false);
    
    const handleSubmit = e =>{
        e.preventDefault();
        alert("El formulario se ha enviado");
    }

    return(
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre: </label>
                <input 
                    type="text" 
                    id="nombre" 
                    name="nombre" 
                    value={nombre} 
                    onChange={(e) => setNombre(e.target.value)}>
                </input>
                <p>Elige tu sabor JS favorito: </p>
                <input 
                    type="radio" 
                    id="vanilla" 
                    name="sabor" 
                    value="vanilla" 
                    onChange={(e) => setSabor(e.target.value)}
                    defaultChecked>
                </input>
                <label htmlFor="vanilla">Vanilla</label>
                <input 
                    type="radio" 
                    id="react" 
                    name="sabor" 
                    value="react" 
                    onChange={(e) => setSabor(e.target.value)}>
                </input>
                <label htmlFor="react">React</label>
                <input 
                    type="radio" 
                    id="angular" 
                    name="sabor" 
                    value="angular" 
                    onChange={(e) => setSabor(e.target.value)}>
                </input>
                <label htmlFor="angular">Angular</label>
                <input 
                    type="radio" 
                    id="vue" 
                    name="sabor" 
                    value="vue" 
                    onChange={(e) => setSabor(e.target.value)}>
                </input>
                <label htmlFor="vue">Vue</label>
                <input 
                    type="radio" 
                    id="svelte" 
                    name="sabor" 
                    value="svelte" 
                    onChange={(e) => setSabor(e.target.value)}>
                </input>
                <label htmlFor="svelte">Svelte</label>
                <p>Elige tu lenguaje de programación favorito</p>
                <select name="lenguaje" 
                onChange={(e) => setLenguaje(e.target.value)} defaultValue="">
                    <option value="">----</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">GO</option>
                    <option value="rb">Ruby</option>
                </select>
                <br></br>
                <label htmlFor="terminos">Acepto términos y consiciones</label>
                <input type="checkbox" id="terminos" name="terminos"
                onChange={(e) => setTerminos(e.target.checked)}>
                </input>
                <br></br>
                <input type="submit"></input>
            </form>
        </>
    ); 
} */

export default function Formularios(){      //Optimizado
    const [form, setForm] = useState({});

    const handleChange = e =>{
        setForm({
            ...form, 
            [e.target.name]: e.target.value,
        });
    }

    const handleChecked = e =>{
        setForm({
            ...form, 
            [e.target.name]: e.target.checked,
        });
    }
    
    const handleSubmit = e =>{
        e.preventDefault();
        alert("El formulario se ha enviado");
    }

    return(
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre: </label>
                <input 
                    type="text" 
                    id="nombre" 
                    name="nombre" 
                    value={form.nombre} 
                    onChange={handleChange}>
                </input>
                <p>Elige tu sabor JS favorito: </p>
                <input 
                    type="radio" 
                    id="vanilla" 
                    name="sabor" 
                    value="vanilla" 
                    onChange={handleChange}
                    defaultChecked>
                </input>
                <label htmlFor="vanilla">Vanilla</label>
                <input 
                    type="radio" 
                    id="react" 
                    name="sabor" 
                    value="react" 
                    onChange={handleChange}>
                </input>
                <label htmlFor="react">React</label>
                <input 
                    type="radio" 
                    id="angular" 
                    name="sabor" 
                    value="angular" 
                    onChange={handleChange}>
                </input>
                <label htmlFor="angular">Angular</label>
                <input 
                    type="radio" 
                    id="vue" 
                    name="sabor" 
                    value="vue" 
                    onChange={handleChange}>
                </input>
                <label htmlFor="vue">Vue</label>
                <input 
                    type="radio" 
                    id="svelte" 
                    name="sabor" 
                    value="svelte" 
                    onChange={handleChange}>
                </input>
                <label htmlFor="svelte">Svelte</label>
                <p>Elige tu lenguaje de programación favorito</p>
                <select name="lenguaje" 
                onChange={handleChange} defaultValue="">
                    <option value="">----</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">GO</option>
                    <option value="rb">Ruby</option>
                </select>
                <br></br>
                <label htmlFor="terminos">Acepto términos y consiciones</label>
                <input type="checkbox" id="terminos" name="terminos"
                onChange={handleChecked}>
                </input>
                <br></br>
                <input type="submit"></input>
            </form>
        </>
    ); 
}