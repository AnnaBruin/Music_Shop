import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand', )
    return data
}

export const createInstrument = async (instrument) => {
    const {data} = await $authHost.post('api/instrument', instrument)
    return data
}

export const fetchInstruments = async (typeId, brandId, page, limit= 8) => {
    const {data} = await $host.get('api/instrument', {params: {
            typeId, brandId, page, limit
        }})
    return data
}

export const fetchOneInstrument = async (id) => {
    const {data} = await $host.get('api/instrument/' + id)
    return data
}