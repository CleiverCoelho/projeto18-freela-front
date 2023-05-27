import styled from "styled-components"
import React from "react"
import { useNavigate } from "react-router-dom"
import { ThreeDots } from "react-loader-spinner"
import axios from "axios"



export default function NewPostPage () {
    const [form, setForm] = React.useState({descricao: "", foto: ""})
    const [carregando, setCarregando] = React.useState(false)
    const navigate = useNavigate();

    function atualizaForm(event){
        setForm({...form, [event.target.name]: event.target.value})
    }

    function createNewPost(event){
        event.preventDefault();
        setCarregando(true)

        const body = {
          description: form.descricao,
          imgUrl: form.foto
        }

        const config = {
          headers: { "Authorization": `Bearer ${localStorage.getItem("TOKEN")}`}
        }
    
        axios.post(`${process.env.REACT_APP_API_URL}/users/posts`, body, config)
        .then((res) => {
          navigate('/profile')
          setCarregando(false)
        })
        .catch((err) => {
          console.log(err)
          navigate('/profile')
          setCarregando(false)
        })
    }


    return (
        <NewPostContainer>
            <CadastroContainer>
            <LogoCadastro> 
                  <h2>New Post</h2>
              </LogoCadastro>
          <form onSubmit={createNewPost}>
            <InputFormFoto
                placeholder="Foto"
                type="text"
                name="foto"
                value={form.foto}
                onChange={(event) => atualizaForm(event)}
                required    
            ></InputFormFoto>
            <InputForm
                placeholder="Descricao"
                type="text"
                name="descricao"
                value={form.descricao}
                onChange={(event) => atualizaForm(event)}
                required    
            ></InputForm>
            <SubmitButton type="submit">{carregando ? <ThreeDots 
                        height="40" 
                        width="40" 
                        radius="9"
                        color="white" 
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    /> : "Criar Post"}</SubmitButton>
          </form>

        </CadastroContainer>
        </NewPostContainer>
    )
}

const NewPostContainer = styled.div`
    width: 100%;
    height: 100%;

    background-color: #0A0A16;
    display: flex;
    align-items: center;
    justify-content: center;

`
const LogoCadastro = styled.div`
    width: 300px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 70px;
        height: 70px;
    }
    h2{
        margin-left: 10px;
        color: white;
        font-weight: 700;
        font-size: 40px;
    }
`

const InputFormFoto = styled.input`
    background: #0A0A16;
		border: 1px solid #D5D5D5;
		border-radius: 3px;
		height: 50px;
    width: 300px;
		margin-bottom: 25px;
		margin-top: 10px;
    color: white;
		padding: 0 10px;
		font-family: 'Roboto';
		font-size: 18px;
		display: flex;
		align-items: center;
		&::placeholder{
			font-style: italic;
		}
`

const InputForm = styled.input`
    background: #0A0A16;
		border: 1px solid #D5D5D5;
		border-radius: 3px;
		height: 150px;
    width: 300px;
		margin-bottom: 25px;
		margin-top: 10px;
    color: white;
		padding: 0 10px;
		font-family: 'Roboto';
		font-size: 18px;
		display: flex;
		align-items: center;
		&::placeholder{
			font-style: italic;
		}
`
const CadastroContainer = styled.div`
  width: 600px;
  height: 680px;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0A0A16;
  border-radius: 20px;
  margin-top: 200px;
    margin-bottom: 200px;
`


const SubmitButton = styled.button`
    background: #0A0A16;
		border: 1px solid #D5D5D5;
		border-radius: 3px;
		height: 50px;
    color: grey;
		margin-bottom: 25px;
		margin-top: 10px;
    width: 320px;
		padding: 0 10px;
		font-family: 'Roboto';
		font-size: 18px;
		display: flex;
		align-items: center;
    justify-content: center;
		&::placeholder{
			font-style: italic;
            display: flex;
		}
`