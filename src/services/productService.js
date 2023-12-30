import { data } from 'autoprefixer'
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


export {
    getProductById,
    createProduct,
    updateProduct,
    getCategory,
    getOwnProduct
}