import FotoProfile from "../CadastroPage/defaultPic.jpg"
import styled from "styled-components"

// IMPORTANTE
// FAZER VERIFICACAO SE VISITANTE É O PROPRIO PERFIL LOGADO]
// SE SIM, OPACITY NONE NO BOTAO DE FOLLOW DIV

export default function InfoProfileContainer ({setOpenFollowers, setFollowersList}) {

    function openFollowers(){
        setOpenFollowers(true)
        setFollowersList('Followers')

    }
    function openFollowing() {
        setOpenFollowers(true)
        setFollowersList('Following')
    }

    return (
        <ProfileInfoContainer>
                <img src={FotoProfile}></img>
                <InfosProfile>
                    <FollowDiv>
                        <Name>Cleiver</Name>
                        <button>Follow</button> 
                    </FollowDiv>
                    <Numbers>
                        <Number>
                            <h3>Posts</h3>
                            <p>10</p>
                        </Number>
                        <Number onClick={openFollowers}>
                            <h3>Followers</h3>
                            <p>10</p>
                        </Number>
                        <Number onClick={openFollowing}>
                            <h3>Following</h3>
                            <p>10</p>
                        </Number>
                    </Numbers>

                </InfosProfile>
                <Biography>
                    lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                    Aldus PageMaker including versions of Lorem Ips
                </Biography>                
            </ProfileInfoContainer>
    )
}

const FollowDiv = styled.div`
    width: 300px;
    height: auto;
    display:  flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;

    button {
        width: 140px;
        height: 35px;
        border-radius: 10px;
        /* opacity: 0; */
    }
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