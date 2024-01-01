import axios from '../setup/axios'

const getBidHistory = async (id) => {
    try {
        let res = await axios.post(`/api/get-bid-history`, { id: id })
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

const placeBid = async (id, bidAmount) => {
    try {
        let res = await axios.post(`/api/place-bid`, { id: id, bidAmount: bidAmount })
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

const getUserAuctionStats = async () => {
    try {
        let res = await axios.get(`/api/get-user-auction-stats`)
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

const getUserActiveBiddingHistory = async (option) => {
    try {
        let res = await axios.get(`/api/get-user-bidding-history?page=${option.page}&limit=${option.limit}`)
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}
const getUserFinishedBiddingHistory = async (option) => {
    try {
        let res = await axios.get(`/api/get-user-finished-bidding-history?page=${option.page}&limit=${option.limit}`)
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}



export {
    getBidHistory,
    placeBid,
    getUserAuctionStats,
    getUserActiveBiddingHistory,
    getUserFinishedBiddingHistory
}