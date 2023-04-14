import React from "react";
import { useState } from "react";
import { addUserApi, getMeApi, getUsersApi } from "../api/user";
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

    //Add new user
    const addUser = async (data) => {
        try {
            setLoading(true)
            await addUserApi(data, auth.token)
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    return {
        getMe,
        getUsers,
        addUser,
        error,
        users,
        loading,
    };
}