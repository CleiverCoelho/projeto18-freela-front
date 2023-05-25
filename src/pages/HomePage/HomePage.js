import { useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import React from "react"
import { Link } from "react-router-dom"

export default function HomePage({setAssentos, setDia, setData, setHorario, 
        setFilme, setListaCompradores, setAssentosReservados}) {

    const [listaFilmes, setListaFilmes] = React.useState([]); 
    
    useEffect(() => {
        const url = "https://mock-api.driven.com.br/api/v8/cineflex/movies";
        const promiseFilmes = axios.get(url);

        promiseFilmes.then((response) => {
            setListaFilmes(response.data);
            setAssentos([]);
            setDia("");
            setData("");
            setHorario("");
            setFilme({});
            setListaCompradores([]);
            setAssentosReservados([]);
        })
    }, [])

    if(listaFilmes.length === 0){
        return (
            <>Loading...</>
        )
    }


    return (
        <PageContainer>
            Selecione o filme

            <ListContainer>
                {listaFilmes.map( (filme) => {
                    return (
                        <Link to={`/sessoes/${filme.id}`} key={filme.id}>
                            <MovieContainer data-test="movie">
                                <img src={filme.posterURL} alt="poster"/>
                            </MovieContainer>
                        </Link>
                    )
                } )}
                
            </ListContainer>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-top: 70px;
`
const ListContainer = styled.div`
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
`
const MovieContainer = styled.div`
    width: 145px;
    height: 210px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    img {
        width: 130px;
        height: 190px;
    }
`