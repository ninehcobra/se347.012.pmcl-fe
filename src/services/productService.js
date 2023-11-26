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
export {
    getProductById
}