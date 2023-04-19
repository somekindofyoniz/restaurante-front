import { BASE_API } from '../utils/constants';

export async function getCategoriesApi(token){
    try {
        const url = BASE_API + 'api/categories/';
        const params = {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }
        const response = await fetch(url, params);
        const result = await response.json();
        console.log(result)
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}