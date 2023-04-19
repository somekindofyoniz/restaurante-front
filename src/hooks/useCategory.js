import React from 'react'
import { useState } from "react"
import { useAuth } from '../hooks';
import { getCategoriesApi } from "../api/category";

export function useCategory() {
    const [categories, setCategories] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const { auth } = useAuth()
    
    // Get all the created categories
    const getCategories = async (token) => {
        try {
            setLoading(true)
            const response = await getCategoriesApi(auth.token)
            console.log('response ->')
            console.log(response)
            setLoading(false);
            setCategories(response);
            return response;
        } catch (error) {
            setLoading(false);
            throw error
        }
    }
    //Returns categories, error and functions for future hook use
    return {
        getCategories,
        categories,
        error,
        loading
    }
}
