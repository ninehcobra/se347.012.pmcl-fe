
import axios from '../setup/axios'

const getProductById = async (id) => {
    try {
        let res = await axios.get(`/api/get-product?id=${id}`)
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

const createProduct = async (name) => {
    try {
        let res = await axios.post(`/api/create-product`, {
            name: name
        })
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

const updateProduct = async (data) => {
    try {
        console.log(data)
        let res = await axios.post(`/api/update-product`, {
            data: data
        })
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

const getCategory = async () => {
    try {
        let res = await axios.get(`/api/get-category`)
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

const getOwnProduct = async (option) => {
    try {
        let res = await axios.get(`/api/get-own-product?categoryId=${option && option.categoryId ? option.categoryId : ''}&sortByPrice=${option ? option.sortByPrice : ''}&productName=${option && option.name ? option.name : ''}&limit=${option.limit}&page=${option.currentPage}`)
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

const getDashboardProduct = async (option) => {
    try {
        let res = await axios.get(`/api/get-dashboard-product?categoryId=${option && option.categoryId ? option.categoryId : ''}&sortByPrice=${option ? option.sortByPrice : ''}&productName=${option && option.name ? option.name : ''}&limit=${option.limit}&page=${option.currentPage}`)
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

const getWonProducts = async () => {
    try {
        let res = await axios.get(`/api/get-won-products`)
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

const addFavorite = async (id) => {
    try {
        let res = await axios.post(`/api/add-favorite`, { id: id })
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

const removeFavorite = async (id) => {
    try {
        let res = await axios.post(`/api/remove-favorite`, { id: id })
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

const getFavorite = async (option) => {
    try {
        let res = await axios.get(`/api/get-favorite?categoryId=${option && option.categoryId ? option.categoryId : ''}&productName=${option && option.name ? option.name : ''}&limit=${option.limit}&page=${option.currentPage}`)
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

const payProduct = async (id) => {
    try {
        let res = await axios.post(`/api/pay-product`, { id: id })
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

export {
    getProductById,
    createProduct,
    updateProduct,
    getCategory,
    getOwnProduct,
    getDashboardProduct,
    getWonProducts,
    addFavorite,
    removeFavorite,
    getFavorite,
    payProduct
}