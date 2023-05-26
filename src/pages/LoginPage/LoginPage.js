import { Link } from "react-router-dom"
import styled from "styled-components"
import React from "react"
import { useNavigate } from "react-router-dom"
import { ThreeDots } from "react-loader-spinner"


export default function CadastroPage() {

  const [form, setForm] = React.useState({email: "", senha: ""})
  const [carregando, setCarregando] = React.useState(false)
  const navigate = useNavigate();

  function atualizaForm(event){
    setForm({...form, [event.target.name]: event.target.value})
  }

  function efetuarCadastro(event){
    event.preventDefault();
    setCarregando(true)

    if(form.senha !== form.confirmaSenha) {
      return alert("senhas diferentes!")
    }

    const body = {
        email: form.email,
        nome: form.nome,
        senha: form.senha,
        cargo: form.cargo
    }

    console.log(body);

}
    function goTo(page) {
        navigate(page);
    }

  return (
    <SingUpContainer>
        <Header>
            <LogoContainer> 
                {/* <img src={LogoHeaderIMG}></img> */}
                <h2>OldTest</h2>
            </LogoContainer>
            <Opcoes>                    
                <EntrarButton onClick={() => goTo("/")}>Entrar</EntrarButton>
                <CadastrarButton onClick={() => goTo("/cadastro")}>Cadastrar</CadastrarButton>
            </Opcoes>

        </Header>
          <CadastroContainer>
            <LogoCadastro> 
                  <h2>Login</h2>
              </LogoCadastro>
          <form onSubmit={efetuarCadastro}>
            <InputForm 
                placeholder="Email"
                type="email"
                name="email"
                value={form.email}
                onChange={(event) => atualizaForm(event)}
                required    
            ></InputForm>
            <InputForm 
                placeholder="Senha"
                type="password"
                name="senha"
                value={form.senha}
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
                    /> : "Entrar"}</SubmitButton>
          </form>
          

        </CadastroContainer>

    </SingUpContainer>
  )
}

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

const InputForm = styled.input`
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

const EntrarButton = styled.button`
  width: 80px;
  height: 35px;
  font-size: 17px;
  font-weight: 400;
  background-color: black;
  color: white;
  border: none;

`
const CadastrarButton = styled.button`
  width: 100px;
  height: 35px;
  font-size: 17px;
  font-weight: 400;
  background-color: black;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  padding: 5px;

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
`

const Opcoes = styled.div`
    
    width: 20%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    text-decoration: none;
    align-items: center;
    margin-right: 20px;
`

const LogoContainer = styled.div`
    width: 10%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 50px;
    img {
        width: 50px;
        height: 50px;
    }
    h2{
        margin-left: 10px;
        color: white;
        font-weight: 700;
        font-size: 30px;
    }
`

const Header = styled.div`
    width: 100%;
    height: 60px;
    position: fixed;
    background-color: black;
    top: 0;
    left: 0;

    padding: 10px;
    display: flex;
    justify-content: space-between;
`

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0A0A16;
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
		}
`