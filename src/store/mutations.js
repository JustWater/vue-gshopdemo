import {
    RECEIVE_ADDRESS,
    RECEIVE_CATAGORYS,
    RECEIVE_SHOPS
} from './mutation_type';

export default {
    [RECEIVE_ADDRESS] (state, address){
        state.address = address
    },
    [RECEIVE_CATAGORYS] (state, catagorys){
        state.catagorys = catagorys
    },
    [RECEIVE_SHOPS] (state, shops){
        state.shops = shops
    },
}