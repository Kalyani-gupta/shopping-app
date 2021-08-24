import Item1 from '../../images/item1.jpeg'
import Item2 from '../../images/item2.jpeg'
import Item3 from '../../images/item3.jpeg'
import Item4 from '../../images/item4.jpeg'
import Item5 from '../../images/item5.jpeg'
import Item6 from '../../images/item6.jpeg'
import {ADD_TO_BAG, REMOVE_FROM_BAG, ADD_QTY, SUB_QTY} from '../actions/types'

const initialState = {
    items: [
        {id:1,title:'Libas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:1100,img:Item1},
        {id:2,title:'W', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:800,img: Item2},
        {id:3,title:'MANGO', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:1200,img: Item3},
        {id:4,title:'Max', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:1500,img:Item4},
        {id:5,title:'Anouk', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:1600,img: Item5},
        {id:6,title:'Biba', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:900,img: Item6}
    ],
    addedItems: [],
    total: 0
}


const cartReducer = (state = initialState, action) => {
    if(action.type === ADD_TO_BAG) {
        let addedItem = state.items.find(item => item.id === action.id)
        let existingItem = state.addedItems.find(item => action.id === item.id)

        if(existingItem) {
            addedItem.quantity += 1
            return {
                ...state,
                total : state.total + addedItem.price
            }
        } else {
            addedItem.quantity = 1

            let newTotal = state.total + addedItem.price
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }
        }
    } 
    if(action.type === REMOVE_FROM_BAG) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_item = state.addedItems.filter(item => action.id !== item.id)

        return {
            ...state,
            addedItems: new_item,
            total: state.total - (itemToRemove.price* itemToRemove.quantity)
        }
    }
    if(action.type === ADD_QTY) {
        let itemToAdd = state.items.find(item => action.id === item.id)
        itemToAdd.quantity += 1
        return {
            ...state,
            total: state.total + itemToAdd.price
        }
    }
    if(action.type === SUB_QTY) {
        let qtyToReduce = state.items.find(item => item.id === action.id)
        if(qtyToReduce.quantity === 1) {
            let newItems = state.addedItems.filter(item => item.id !== action.id)
            return {
                ...state,
                addedItems: newItems,
                total: state.total -  qtyToReduce.price
            }
        } else {
            qtyToReduce.quantity -= 1
            return {
                ...state,
                total: state.total - qtyToReduce.price
            }
        }
    } 
    else {
        return state
    }
}

export default cartReducer