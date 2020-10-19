/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */

import ajax from './ajax';
// const BASE_URL = 'http://localhost:4000';
const BASE_URL = '/api';

export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`);
export const reqFoodCategorys = () => ajax(BASE_URL + '/index_category')
export const reqShops = (longitude, latitude) => ajax(BASE_URL + '/shops', {longitude, latitude})
