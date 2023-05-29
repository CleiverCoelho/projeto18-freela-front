import styled from "styled-components"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react"
import LoginPage from "./pages/LoginPage/LoginPage";
import CadastroPage from "./pages/CadastroPage/CadastroPage"
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import NewPostPage from "./pages/NewPostPage/NewPostPage"
import VisitUserPage from "./pages/VisitUserPage/VisistUserPage";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/profile" element={<ProfilePage />}></Route>
                <Route path="/cadastro" element={<CadastroPage/>}></Route>
                <Route path="/newpost" element={<NewPostPage/>}></Route>
                <Route path="/visit/:id" element={<VisitUserPage/>}></Route>
                <Route path="/" element={<LoginPage/>}></Route>
            </Routes>
            
        </BrowserRouter>
    )
}

