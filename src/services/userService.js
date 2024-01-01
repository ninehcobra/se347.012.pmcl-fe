import axios from '../setup/axios'

const registerNewUser = async (email, name, password) => {
    try {
        let res = await axios.post("/api/register", {
            email, password, name
        })
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

const login = async (email, password) => {
    try {

        let res = await axios.post("/api/login", {
            email, password
        }
        )
        console.log(res)
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

const getUserAccount = async () => {
    let res = axios.get("/api/account")
    return res
}

const updateUser = async (data) => {
    try {

        let res = await axios.post("/api/update-user-info", data
        )
        console.log(res)
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

const logOut = async () => {
    try {
        let res = await axios.post("/api/logout")
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

const updatePassword = async (data) => {
    try {
        let res = await axios.post("/api/update-password", data)
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

export {
    registerNewUser,
    login,
    getUserAccount,
    updateUser,
    logOut,
    updatePassword
}