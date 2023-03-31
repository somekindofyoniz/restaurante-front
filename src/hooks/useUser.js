import React from "react";
import { useState } from "react";
import { getMeApi, getUsersApi } from "../api/user";
import { useAuth } from "./useAuth";

export function useUser() {
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [users, setUsers] = useState(null);

    const {auth} = useAuth();

    //Get actual session user
    const getMe = async (token) => {
        try {
            const response = await getMeApi(token);
            return response;
        } catch (error) {
            throw error;
        }
    }

    //Get user list
    const getUsers = async (token) => {
        try {
            setLoading(true)
            const response = await getUsersApi(auth.token);
            setLoading(false);
            setUsers(response);
            return response;
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    return {
        getMe,
        getUsers,
        error,
        users,
        loading,
    };
}