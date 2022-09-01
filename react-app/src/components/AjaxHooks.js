import React, { useState, useEffect } from 'react';

function Pokemon(props){
    return(
        <figure>
            <img src={props.avatar} alt={props.name}/>
            <figcaption>{props.name}</figcaption>
        </figure>
    )
};

export default function AjaxHooks(){
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const getPokemons = async (url) =>{
            let res = await fetch(url),
            json = await res.json();

            json.results.forEach( async (el) => {
                let res = await fetch(el.url);
                json = await res.json();
                //console.log(json);
                    let pokemon ={
                        id: json.id,
                        name: json.name,
                        avatar: json.sprites.front_default,
                    };

                    setPokemons((pokemons) => [...pokemons, pokemon]);
                });
        }
        getPokemons("https://pokeapi.co/api/v2/pokemon/");
    }, [])

    return(
        <>
        <h2>Peticiones asíncronas en Hooks</h2>
        {pokemons.length === 0 ? (
            <h3>Cargando...</h3>
        ):( 
            pokemons.map((el) => (
            <Pokemon key={el.id} name={el.name} avatar={el.avatar}/>)))
        }
        </>
    )
}
