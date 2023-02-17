import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Posts } from '../pages/Posts'
import { Register } from '../pages/Register'
import { PrivateRoute } from './PrivateRoute'

export function PagesRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register/>} />

            <Route path="/home" element={
                <PrivateRoute>
                    <Home />
                </PrivateRoute>
            } />
            <Route path="/posts" element={
                <PrivateRoute>
                    <Posts />
                </PrivateRoute>
            } />
        </Routes>
    )
}