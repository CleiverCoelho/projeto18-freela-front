import styled from "styled-components"
import React from "react"
import dayjs from "dayjs"

export default function PostsContainer ({postsList}) {
    const [posts, setPosts] = React.useState(postsList)

    console.log(posts)
    return (
        <Posts>
            {posts.map((post) => {
                return (
                    <PostContainer>
                        <img src={post.imgUrl}></img>
                        <Interactions>
                            <Curtidas>
                                <strong>{post.likes}</strong> curtidas
                            </Curtidas>
                            <Horario>
                                {dayjs(post.createdAt).format('DD/MM/YYYY HH:mm').replace(':', 'h')}
                            </Horario>
                        </Interactions>
                        <Description>
                            {post.description}
                        </Description>
                    
                    </PostContainer>
                )
            })}
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
    margin-right: 10px;

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
    margin-bottom: 40px;

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

    margin-bottom: 600px;
    padding: 20px;

`
