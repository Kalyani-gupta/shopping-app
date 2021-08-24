import {ADD_TO_BAG} from './types';
import {REMOVE_FROM_BAG} from './types';
import {ADD_QTY} from './types';
import {SUB_QTY} from './types';

export const addToBag = (id) => {
    return {
        type: ADD_TO_BAG,
        id
    }
}

export const removeFromBag = (id) => {
    return {
        type: REMOVE_FROM_BAG,
        id
    }
}

export const addQty = (id) => {
    return {
        type: ADD_QTY,
        id
    }
}

export const subQty = (id) => {
    return  {
        type: SUB_QTY,
        id
    }
}