import styled from "styled-components"
import { IoIosAddCircleOutline } from "react-icons/io";
import PostsContainer from "../ProfilePage/PostsContainer.js";
import { Link, useNavigate, useParams } from "react-router-dom";
import { HiSearch } from "react-icons/hi";
import FollowersPage from "../ProfilePage/FollowersContainer";
import { HiHome, HiUser } from "react-icons/hi2";
import {useEffect} from "react";
import InfoVisitContainer from "./InfoVisitContainer.js"
import axios from "axios";
import SearchContainer from "../ProfilePage/SeacrhContainer.js";
import React from "react";

export default function ProfilePage () {

    const [openFollowers, setOpenFollowers] = React.useState(false);
    // na hora que clicar no seguires ou seguindo de acordo com isso vai mudar a lista que deverá aparecer no pop up
    const [followersList, setFollowersList] = React.useState("");
    const [userInfo, setUserInfo] = React.useState({})
    const [searchUserDiv, setSearchUserDiv] = React.useState(false)
    const [searchInput, setSearchInput] = React.useState("");
    const [searchOn, setSearchOn] = React.useState(false)


    const navigate = useNavigate();
    const {id} = useParams();

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

    useEffect(() => {
        const config = {
            headers: { "Authorization": `Bearer ${localStorage.getItem("TOKEN")}`}
          }
      
          axios.get(`${process.env.REACT_APP_API_URL}/users/visitor/${id}`, config)
          .then((res) => {
            console.log(res.data)
            setUserInfo(res.data)
          })
          .catch((err) => {
            console.log(err)
          })

    }, [])

    if(userInfo.name === undefined && userInfo.posts === undefined) return <>Loading</>

    return (
        <VisitPageContainer>
            <Header>
                <h2>OldTest</h2>
                <SearchBar 
                    searchUserDiv={searchUserDiv}
                    type="text"
                    onChange={(event) => setSearchInput(event.target.value)}    
                ></SearchBar>
                <div>
                    <Link to={"/profile"}>
                        <HiUser style={{color: "white", width: "30px", height: "30px"}}></HiUser>
                    </Link>
                    <IoIosAddCircleOutline onClick={newPost} style={{color: "white", width: "30px", height: "30px"}}/>
                    <HiSearch onClick={searchUser} style={{color: "white", width: "30px", height: "30px"}}/>
                </div>
            </Header>
            
            <InfoVisitContainer userInfo={userInfo} setOpenFollowers={setOpenFollowers} setFollowersList={setFollowersList}></InfoVisitContainer>
            {/* <FollowersPage followerOn={openFollowers} setOpenFollowers={setOpenFollowers}></FollowersPage> */}
            <SearchContainer searchOn={searchOn} setSearchOn={setSearchOn} searchInput={searchInput}></SearchContainer>

            <PostsContainer postsList={userInfo.posts}></PostsContainer>
        </VisitPageContainer>
    )
}

const SearchBar = styled.input`
    width: 300px;
    height: 40px;
    opacity: ${(props) => props.searchUserDiv ? "1" : "0"};
    background-color: aliceblue;
    transition: all .5s;

`

const VisitPageContainer = styled.div`
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