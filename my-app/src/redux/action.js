import { ADD_CAKE, BUY_CAKE, EXTENUATE_CAKE, INCREMENT_CAKE, RESET } from "./actionTypes"


export const addCake = () => {
    return {
        type: ADD_CAKE
    }
}

export const buyCake = () => {
    return {
        type: BUY_CAKE
    }
}

export const incrementCake = () => {
    return {
        type: INCREMENT_CAKE
    }
}

export const extenuateCake = () => {
    return {
        type: EXTENUATE_CAKE
    }
}

export const reset = () => {
    return{
        type:RESET
    }
}