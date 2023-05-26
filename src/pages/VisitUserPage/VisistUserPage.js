import styled from "styled-components"
import { IoIosAddCircleOutline } from "react-icons/io";
import PostsContainer from "../ProfilePage/PostsContainer.js";
import { useNavigate } from "react-router-dom";
import { HiSearch } from "react-icons/hi";
import FollowersPage from "../ProfilePage/FollowersContainer";
import { HiHome } from "react-icons/hi2";
import React from "react";
import InfoVisitContainer from "./InfoVisitContainer.js"


export default function ProfilePage () {

    const [openFollowers, setOpenFollowers] = React.useState(false);
    // na hora que clicar no seguires ou seguindo de acordo com isso vai mudar a lista que deverá aparecer no pop up
    const [followersList, setFollowersList] = React.useState("");

    const navigate = useNavigate();

    function newPost () {
        navigate("/newpost")
    }

    function searchUser (){

    }

    return (
        <VisitPageContainer>
            <Header>
                <h2>OldTest</h2>
                <div>
                    <HiHome style={{color: "white", width: "30px", height: "30px"}}></HiHome>
                    <IoIosAddCircleOutline onClick={newPost} style={{color: "white", width: "30px", height: "30px"}}/>
                    <HiSearch onClick={searchUser} style={{color: "white", width: "30px", height: "30px"}}/>
                </div>
            </Header>
            
            <InfoVisitContainer setOpenFollowers={setOpenFollowers} setFollowersList={setFollowersList}></InfoVisitContainer>
            <FollowersPage followerOn={openFollowers} setOpenFollowers={setOpenFollowers}></FollowersPage>

            <PostsContainer>

            </PostsContainer>
        </VisitPageContainer>
    )
}

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