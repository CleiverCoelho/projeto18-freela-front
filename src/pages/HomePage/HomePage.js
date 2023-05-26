import { useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import React from "react"
import { Link } from "react-router-dom"

export default function HomePage({setAssentos, setDia, setData, setHorario, 
        setFilme, setListaCompradores, setAssentosReservados}) {

    const [listaFilmes, setListaFilmes] = React.useState([]); 
    
    // useEffect(() => {
    //     const url = "https://mock-api.driven.com.br/api/v8/cineflex/movies";
    //     const promiseFilmes = axios.get(url);

    //     promiseFilmes.then((response) => {
    //         setListaFilmes(response.data);
    //         setAssentos([]);
    //         setDia("");
    //         setData("");
    //         setHorario("");
    //         setFilme({});
    //         setListaCompradores([]);
    //         setAssentosReservados([]);
    //     })
    // }, [])

    if(listaFilmes.length === 0){
        return (
            <>Loading...</>
        )
    }


    return (
        <>

        </>
    )
}
