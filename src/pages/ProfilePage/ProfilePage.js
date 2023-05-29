import styled from "styled-components"
import { IoIosAddCircleOutline } from "react-icons/io";
import PostsContainer from "./PostsContainer";
import InfoProfileContainer from "./InfoPorifleContainer";
import { useNavigate } from "react-router-dom";
import { HiSearch, HiUser,HiOutlineCheckCircle } from "react-icons/hi";
import FollowersPage from "./FollowersContainer";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import SearchContainer from "./SeacrhContainer";

export default function ProfilePage () {

    const [openFollowers, setOpenFollowers] = React.useState(false);
    // na hora que clicar no seguires ou seguindo de acordo com isso vai mudar a lista que deverá aparecer no pop up
    const [followersList, setFollowersList] = React.useState("followers");
    const [searchUserDiv, setSearchUserDiv] = React.useState(false)
    const [userInfo, setUserInfo] = React.useState({})
    const [searchOn, setSearchOn] = React.useState(false)
    const [searchInput, setSearchInput] = React.useState("");

    const navigate = useNavigate();

    function newPost () {
        navigate("/newpost")
    }

    function searchUser (){
        if(searchUserDiv === true){
            setSearchUserDiv(false)
            setSearchOn(true);
        }else{
            setSearchUserDiv(true);
        }
    }

    if(localStorage.getItem("TOKEN") === undefined || localStorage.getItem("TOKEN") === null){
        alert("Token Invalido")
        navigate('/')
    }

    useEffect(() => {
        const config = {
            headers: { "Authorization": `Bearer ${localStorage.getItem("TOKEN")}`}
          }
      
          axios.get(`${process.env.REACT_APP_API_URL}/users`, config)
          .then((res) => {
            setUserInfo(res.data)
          })
          .catch((err) => {
            console.log("RESPOSTA PROFILE")
            console.log(err.response.data)
          })

    }, [])

    if(userInfo.name === undefined && userInfo.posts === undefined) return <>Loading</>
    
    return (
        <ProfilePageContainer>
            <Header>
                <h2>OldTest</h2>
                <SearchBar 
                    searchUserDiv={searchUserDiv}
                    type="text"
                    onChange={(event) => setSearchInput(event.target.value)}    
                ></SearchBar>
                
                <div>
                    <HiUser style={{color: "white", width: "30px", height: "30px"}}></HiUser>
                    <IoIosAddCircleOutline onClick={newPost} style={{color: "white", width: "30px", height: "30px"}}/>
                    <HiSearch onClick={searchUser} style={{color: "white", width: "30px", height: "30px"}}/>
                </div>
            </Header>
            
            <InfoProfileContainer 
                profileName={userInfo.name} 
                profileImage={userInfo.profileImageUrl} 
                setOpenFollowers={setOpenFollowers} 
                setFollowersList={setFollowersList}
                postsLength={userInfo.posts.length}
                followers={userInfo.followers}
                following={userInfo.following}
                biography={userInfo.biography}
            >
            </InfoProfileContainer>
            <FollowersPage type={followersList} followerOn={openFollowers} setOpenFollowers={setOpenFollowers}></FollowersPage>
            <SearchContainer searchOn={searchOn} setSearchOn={setSearchOn} searchInput={searchInput}></SearchContainer>
            <PostsContainer postsList={userInfo.posts}></PostsContainer>
        </ProfilePageContainer>
    )
}


const SearchBar = styled.input`
    width: 300px;
    height: 40px;
    opacity: ${(props) => props.searchUserDiv ? "1" : "0"};
    background-color: aliceblue;
    transition: all .5s;

`

const ProfilePageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #0A0A16;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const Header = styled.div`
    width: 100%;
    height: 60px;
    position: fixed;
    background-color: black;
    top: 0;
    left: 0;

    z-index: 2;

    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
        width: 120px;
        margin-right: 50px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    h2{
        margin-left: 30px;
        color: white;
        font-weight: 700;
        font-size: 30px;
    }
`