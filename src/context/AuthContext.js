import React, { createContext, useEffect, useState } from 'react'
import { setToken } from '../api/token';

export const AuthContext = createContext({
    auth: undefined,
    login: () => null,
    logout: () => null
})

//wraps entire application
export function AuthProvider(props){
    const {children} = props;

    const login = async (token) => {
        setToken(token)
        console.log('context logiin ', token)
    }
    const valueContext = {
        auth: null,
        login,
        logout: () => console.log("cerrando sesion")
    };

    return (
        <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
    )
}