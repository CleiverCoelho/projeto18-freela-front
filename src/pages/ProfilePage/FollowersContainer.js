import styled from "styled-components"
import { HiX } from "react-icons/hi";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";


export default function FollowersPage ({followerOn, setOpenFollowers, type}){


    const [listConnection, setListConnection] = React.useState(undefined)

    function closeFollowers(){
        setOpenFollowers(false)
    }

    useEffect(() => {
        const config = {
            headers: { "Authorization": `Bearer ${localStorage.getItem("TOKEN")}`}
          } 

          axios.get(`${process.env.REACT_APP_API_URL}/users/${type}`, config)
          .then((res) => {
            console.log("RESPOSTA SEGUIDORES")
            console.log(res.data)
            setListConnection(res.data)
          })
          .catch((err) => {
            console.log(err)
          })

    }, [type])

    if(listConnection === undefined || listConnection === null) return <>Loading</>
    

    return (
        <FollowersContainer followerOn={followerOn}>
            <Followers followerOn={followerOn}>
                <Botao onClick={closeFollowers}>
                    <HiX style={{color: "white", width: "30px", height: "30px"}}/>
                </Botao>
                <Space></Space>
                {listConnection.map((user) => {
                    return (
                        <User 
                            id={user.id} 
                            userImg={user.userImg} 
                            name={user.name}
                            biography={user.biography}

                        ></User>
                        )
                })}
            </Followers>
        </FollowersContainer>
    )
}

function User({id, name, userImg, biography}){

    const [visitId, setUserId] = React.useState(id)
    const navigate = useNavigate()

    return (
        <UserContainer>
            <Link to={`/visit/${visitId}`}>
                <div>
                    <img src={userImg}></img>
                    <UserName>{name}</UserName>
                </div>
            </Link>
        </UserContainer>
    )
}

const UserName = styled.div`
    font-size: 20px;
    font-weight: 500;

    width: 80px;
    height: auto;
    text-decoration: none;
    color: white;
    border: none;
`

const Space = styled.div`
    height: 50px;
`

const UserContainer = styled.div`
    width: 90%;
    height: 30px;
    color: white;
    border-bottom: 1px solid grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    
    button{
        width: 80px;
        border-radius: 5px;
        background-color: grey;
        color: white;
    }

    img {
        margin-right: 13px;
        width: 30px;
        height: 30px;
        border-radius: 20px;
    }

    div{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 120px;
        height: auto;
    }
`
const Botao = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
`

const Followers = styled.div`
    background: #0A0A16;
    color: white;
    width: 50%;
    height: 80%;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, .25);
    transition: all .5s;
    transform: all .5s;
    opacity: ${(props) => props.followerOn ? "1" : "0"};
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 70px;
    border-radius: 9px;
    position: relative;

    overflow-y: scroll;
`

const FollowersContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(50, 50, 50, 0.9);
    z-index: 1;
    display: ${(props) => props.followerOn ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    font-size: 22px;
`