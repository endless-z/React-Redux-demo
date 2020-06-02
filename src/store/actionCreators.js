import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM, GET_LIST } from './actionTypes'

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const addItemAction = () => ({
    type: ADD_ITEM
})

export const delItemAction = (index) => ({
    type: DEL_ITEM,
    index
})

export const getDatalist = (data) => ({
    type: GET_LIST,
    data
})