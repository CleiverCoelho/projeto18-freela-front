import styled from "styled-components"
import { HiX } from "react-icons/hi";


export default function FollowersPage ({followerOn, setOpenFollowers}){

    function closeFollowers(){
        setOpenFollowers(false)
    }

    return (
        <FollowersContainer followerOn={followerOn}>
            <Followers followerOn={followerOn}>
                <Botao onClick={closeFollowers}>
                    <HiX style={{color: "white", width: "30px", height: "30px"}}/>
                </Botao>
                
            </Followers>
        </FollowersContainer>
    )
}
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
    display: ${(props) => props.followerOn ? "flex" : "none"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    border-radius: 9px;
    position: relative;
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