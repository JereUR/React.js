import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import {useFetch} from "../hooks/useFetch"

export default function CustomHooks(){
    let url = "https://pokeapi.co/api/v2/pokemon/";
    url = "https://jsonplaceholder.typicode.com/users";
    //console.log(useFetch());

    let {data, isPending, error} = useFetch(url);
    return(
        <>
        <h2>Custom Hooks</h2>
        <h3>{JSON.stringify(isPending)}</h3>
        <h3>
            <mark>{JSON.stringify(error)}</mark>
        </h3>
        <h3>
            <pre style = {{whiteSpace: "pre-wrap"}}>
                <code>{JSON.stringify(data)}</code>
            </pre>
        </h3>
        </>
    );
}