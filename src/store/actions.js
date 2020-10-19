import {
    RECEIVE_ADDRESS,
    RECEIVE_CATAGORYS,
    RECEIVE_SHOPS
} from './mutation_type';

import {reqAddress, reqFoodCategorys, reqShops} from '../api/index'

export default {
    async getAddress ({commit, state}){
        const geohash = state.latitude + "," + state.longitude;
        const result = await reqAddress(geohash);
        if(result.code === 0){
            const address = result.data
            commit(RECEIVE_ADDRESS, {address})
        }
    },
    async getCatagorys ({commit}){
        const result = await reqFoodCategorys();
        if(result.code === 0){
            const catagorys = result.data
            commit(RECEIVE_CATAGORYS, {catagorys})
        }
    },
    async getShops ({commit, state}){
        const {longitude, latitude} = state;
        const result = await reqShops(longitude, latitude);
        if(result.code === 0){
            const shops = result.data
            commit(RECEIVE_SHOPS, {shops})
        }
    }
}