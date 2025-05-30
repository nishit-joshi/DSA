import { act } from "react-dom/test-utils";
import {ActionTypes} from '../contants/action-types'

const initialState = {
    products : 
        {
        id : 1,
        title : 'this is demo ',
        category : 'Programmer'
    },
}


export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            // Assuming payload is an array of products that you want to set in the state
            return {
                ...state,
                products: payload,
            };
        default:
            return state;
    }
};
