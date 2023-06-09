import { BASE_API } from '../utils/constants';

export async function loginApi(formValue) {
    try {
        const url = BASE_API + 'api/auth/login/';

        const params = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formValue)
        };

        const response = await fetch(url, params);

        if (response.status !== 200) {
            throw new Error("Error al validar los datos")
        }
        else {
            console.log("performed")
        }

        const result = await response.json();
        return result;

    } catch (error) {
        throw error
    }
}

export async function getMeApi(token) {
    try {
        const url = BASE_API + 'api/auth/me/';

        const params = {
            //method: 'GET',
            headers: {
                Authorization: "Bearer " + token
            },
            //body: JSON.stringify(formValue)
        };

        const response = await fetch(url, params);
        const userResult = await response.json()

        if (response.status !== 200) {
            throw new Error("Error al validar los datos")
        }
        else {
            console.log("performed getMeApi")
        }

        //const result = await response.json();
        return userResult;

    } catch (error) {
        throw error
    }
}

export async function getUsersApi(token) {
    try {
        const url = BASE_API + 'api/users/';
        const params = {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error
    }
}

export async function addUserApi(values, token) {
    try {
        const url = BASE_API + 'api/users/';
        const params = {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        }

        const response = await fetch(url, params);

        if (response.status !== 201) {
            throw new Error("Error al validar los datos")
        }
        else {
            console.log("performed")
        }

        const result = await response.json();
        return result;

    } catch (error) {
        console.error(error)
    }
}

//Edit users
export async function editUserApi(id, data, token) {
    try {
        const url = BASE_API + 'api/users/'+id+'/';
        const params = {
            method: 'PATCH',
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        const response = await fetch(url, params);

        if (response.status !== 200) {
            throw new Error("Error al validar los datos")
        }
        else {
            console.log("performed")
        }

        const result = await response.json();
        return result;

    } catch (error) {
        console.error(error)
    }
}

//Delete users
export async function deleteUserApi(id, token) {
    try {
        const url = BASE_API + 'api/users/'+id+'/';
        const params = {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer ' + token,
            },
        }

        const response = await fetch(url, params);

        if (response.status !== 204) {
            throw new Error("Error al validar los datos")
        }
        else {
            console.log("performed")
        }

        const result = await response.status;
        return result;

    } catch (error) {
        console.error(error)
    }
}