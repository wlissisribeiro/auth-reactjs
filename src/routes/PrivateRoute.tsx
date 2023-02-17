import React, { useContext } from 'react'
import { RouteObject, useNavigate } from 'react-router-dom'
import { Context } from '../context/ContextProvider';


export const PrivateRoute = ({ children } : { children: JSX.Element }) => {

    const navigate = useNavigate();
    const { isAuthenticate } = useContext(Context);
    if(!isAuthenticate){
        navigate({ pathname: "/" })
    }

    return children 
}
