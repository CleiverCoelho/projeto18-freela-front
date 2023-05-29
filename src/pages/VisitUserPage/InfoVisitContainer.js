import FotoProfile from "../CadastroPage/defaultPic.jpg"
import styled from "styled-components"
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"
import React from "react"
import { useEffect } from "react"

// IMPORTANTE
// FAZER VERIFICACAO SE VISITANTE É O PROPRIO PERFIL LOGADO]
// SE SIM, VAI PARA A PAGINA DE PROFILE

export default function InfoProfileContainer ({setOpenFollowers, setFollowersList, userInfo}) {

    const navigate = useNavigate()

    const [followed, setFollowed] = React.useState(false)

    function openFollowers(){
        setOpenFollowers(true)
        setFollowersList('Followers')

    }
    function openFollowing() {
        setOpenFollowers(true)
        setFollowersList('Following')
    }

    function createNewConnection(){

        const config = {
            headers: { "Authorization": `Bearer ${localStorage.getItem("TOKEN")}`}
          }
        axios.post(`${process.env.REACT_APP_API_URL}/users/follow/${userInfo.id}`, {} , config)
          .then((res) => {
            setFollowed(true)
            navigate(``)
          })
          .catch((err) => {
            alert("ALGO FALHOU. TENTE NOVAMENTE!")
            console.log(err.response.data)
            navigate(``)
          })

    }


    return (
        <ProfileInfoContainer>
                <img src={userInfo.profileImgUrl}></img>
                <InfosProfile>
                    <FollowDiv>
                        <Name>{userInfo.name}</Name>
                        <FollowButton disabled={followed || userInfo.doiFollow ? true : false} onClick={createNewConnection} doiFollow={userInfo.doiFollow}>{userInfo.doiFollow ? "Following" : "Follow"}</FollowButton> 
                    </FollowDiv>
                    <Numbers>
                        <Number>
                            <h3>Posts</h3>
                            <p>{userInfo.posts.length}</p>
                        </Number>
                        <Number onClick={openFollowers}>
                            <h3>Followers</h3>
                            <p>{userInfo.followers}</p>
                        </Number>
                        <Number onClick={openFollowing}>
                            <h3>Following</h3>
                            <p>{userInfo.following}</p>
                        </Number>
                    </Numbers>

                </InfosProfile>
                <Biography>
                    {userInfo.biography}
                </Biography>                
            </ProfileInfoContainer>
    )
}

const FollowButton = styled.button`
    width: 140px;
    height: 35px;
    border-radius: 10px;
    background-color: ${(props) => props.doiFollow ? "grey" : "white"};
    color: ${(props) => props.doiFollow ? "white" : "black"};
`

const FollowDiv = styled.div`
    width: 300px;
    height: auto;
    display:  flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
`

const Biography = styled.div`
    width: 40%;
    height: 80%;
    margin-top: 20px;
    overflow-y: scroll;

    font-size: 20px;
    font-weight: 500;
    color: white;

`

const InfosProfile = styled.div`
    width: 30%;
    height: 100%;
    z-index: 1;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around; 
`

const Number = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
        margin-bottom: 20px;
    }
`

const Numbers = styled.div`
    width: 90%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    
    margin-top: 20px;
    font-weight: 400;
    font-size: 20px;
    color: grey;
`

const Name = styled.div`
    width: 40%;
    height: 30px;

    font-size: 30px;
    font-weight: 700;
`
const ProfileInfoContainer = styled.div`
    width: 80%;
    height: 200px;
    margin-top: 150px;
    border: 1px solid gray;
    border-radius: 10px;
    margin-bottom: 50px;
    padding: 10px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    img {
        width: 120px;
        height: 120px;
        border-radius: 100%;
    }
`