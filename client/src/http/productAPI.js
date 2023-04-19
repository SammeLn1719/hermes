
import {$authHost, $host} from "./index";


export const createType = async (type) => {
    const {data} = await $authHost.post('api/product/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/product/all', {})
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/product/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/product/all', {})
    return data
}

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/product/all', device)
    return data
}

export const fetchProduct = async () => {
    const {data} = await $host.get('api/product/all', {})
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}