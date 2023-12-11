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
        let res = await axios.post(`/api//update-product`, {
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


export {
    getProductById,
    createProduct,
    updateProduct
}