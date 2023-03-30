import React, { createContext, useEffect, useState } from 'react'
import { getToken, setToken, removeToken } from '../api/token';
import { getMeApi } from '../api/user';
import { useUser } from '../hooks';
import { TOKEN } from '../utils/constants';

export const AuthContext = createContext({
    auth: undefined,
    login: () => null,
    logout: () => null,
})

//wraps entire application
export function AuthProvider(props) {
    const { children } = props;
    const [auth, setAuth] = useState(undefined)
    const { getMe } = useUser()

    /*useEffect(() => {
      (async () =>{
        const token = getToken();

        if (token){
            const me = await getMe(token);
            setAuth({token, me})
        }
        else{
            setAuth(null)
        }

      })();
    }, []);*/

    useEffect(() => {
        (async () => {
            const token = getToken();

            if (token){
                const me = await getMe(token);
                setAuth({token, me})
            }
            else{
                removeToken()
                setAuth(null)
            }

        })()
    }, [])



    //Login function receives access token
    const login = async (token) => {
        //set access token
        setToken(token);
        const me = await getMe(token);
        setAuth({ token, me })
        //console.log('auth-->>' + auth)
        //console.log('context logiin ', token)
    }

    //Logout function
    const logout = () => {
        if (auth) {
            removeToken()
            setAuth(null);
        }
    }

    //Context values
    const valueContext = {
        auth,
        login,
        logout,
    };

    //if (auth === undefined) return null;

    return (
        <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
    )
}