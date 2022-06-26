import { types } from "../types/types";

export const reducerApp = (state = {}, action) => {


    switch (action.type) {
        case types.darkMode:
            return {
                ...state,
             mode: !action.payload

            }
        
        default:
            return state;
    }

}