import React from "react";
import { useState } from "react";
import { addUserApi, editUserApi, getMeApi, getUsersApi, deleteUserApi } from "../api/user";
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

    //Modify user data
    const editUser = async (id, data) => {
        try {
            setLoading(true)
            await editUserApi(id, data, auth.token)
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }

    //Delete user data
    const deleteUser = async (id) => {
        const tokendelete = auth.token
        try {
            setLoading(true)
            await deleteUserApi(id, tokendelete)
            setLoading(false);
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }
    return {
        getMe,
        getUsers,
        addUser,
        editUser,
        deleteUser,
        error,
        users,
        loading,
    };
}