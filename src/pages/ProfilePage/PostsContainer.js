import styled from "styled-components"
import FotoPost from "../CadastroPage/defaultPic.jpg"

export default function PostsContainer () {
    return (
        <Posts>
                <PostContainer>
                    <img src={FotoPost}></img>
                    <Interactions>
                        <Curtidas>
                            <strong>51</strong> curtidas
                        </Curtidas>
                        <Horario>
                            12/05/2023 20h30
                        </Horario>
                    </Interactions>
                    <Description>
                        lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Description>
                
                </PostContainer>
            </Posts>
    )
}


const Curtidas = styled.div`
    width: 250px;
    margin-top: 10px;
    height: auto;

    font-size: 20px;
    font-weight: 500;
    color: white;
`

const Horario = styled.div`
    width: 150px;
    margin-top: 10px;
    height: auto;

    font-size: 20px;
    font-weight: 500;
    color: grey;
`

const Description = styled.div`
    width: 90%;
    height: auto;
    color: white;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 50px;
`

const Interactions = styled.div`
    width: 90%;
    height: 50px;
    display: flex;
    justify-content: space-between;
`

const PostContainer = styled.div`
    width: 60%;
    height: auto;
    border: 1px solid gray;

    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;

    img {
        border-radius: 10px;
        margin-top: 20px;
        width: 90%;
        height: 650px;
    }
`

const Posts = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #0A0A16;

    margin-bottom: 200px;
    padding: 20px;

`
