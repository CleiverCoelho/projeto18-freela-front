import styled from "styled-components"
import { IoIosAddCircleOutline } from "react-icons/io";
import PostsContainer from "./PostsContainer";
import InfoProfileContainer from "./InfoPorifleContainer";
import { useNavigate } from "react-router-dom";
import { HiSearch } from "react-icons/hi";
import FollowersPage from "./FollowersContainer";
import React from "react";


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
        <ProfilePageContainer>
            <Header>
                <h2>ERrOR4o4</h2>
                <div>
                    <IoIosAddCircleOutline onClick={newPost} style={{color: "white", width: "30px", height: "30px"}}/>
                    <HiSearch onClick={searchUser} style={{color: "white", width: "30px", height: "30px"}}/>
                </div>
            </Header>
            
            <InfoProfileContainer setOpenFollowers={setOpenFollowers} setFollowersList={setFollowersList}></InfoProfileContainer>
            <FollowersPage followerOn={openFollowers} setOpenFollowers={setOpenFollowers}></FollowersPage>

            <PostsContainer></PostsContainer>
        </ProfilePageContainer>
    )
}

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
        width: 100px;
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