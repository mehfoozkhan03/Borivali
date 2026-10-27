import {Routes,Route}  from "react-router-dom"
import { Home } from "../Pages/Home"
import { About } from "../Pages/About"
import { Login } from "../Pages/Login"
import { ErrorPage } from "../Pages/ErrorPage"


export const RouterPath=()=>{
    return<Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<ErrorPage/>} />
    </Routes>
}