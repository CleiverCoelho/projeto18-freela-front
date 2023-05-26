import styled from "styled-components"
import HomePage from "./pages/HomePage/HomePage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react"
import LoginPage from "./pages/LoginPage/LoginPage";
import CadastroPage from "./pages/CadastroPage/CadastroPage"
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import NewPostPage from "./pages/NewPostPage/NewPostPage"

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<HomePage />}></Route>
                <Route path="/profile" element={<ProfilePage />}></Route>
                <Route path="/cadastro" element={<CadastroPage/>}></Route>
                <Route path="/newpost" element={<NewPostPage/>}></Route>
                <Route path="/" element={<LoginPage/>}></Route>
            </Routes>
            
        </BrowserRouter>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }

`
