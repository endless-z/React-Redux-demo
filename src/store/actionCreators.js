import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM } from './actionTypes'

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const addItemAction = (value) => ({
    type: ADD_ITEM
})

export const delItemAction = (index) => ({
    type: DEL_ITEM,
    index
})