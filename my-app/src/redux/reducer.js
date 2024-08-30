import { ADD_CAKE, BUY_CAKE, EXTENUATE_CAKE, INCREMENT_CAKE, RESET } from "./actionTypes";

const initialValues = {
    cakes: 20
}

const cakeReducer = (state = initialValues, action) => {
    switch (action.type) {
        case ADD_CAKE:
            return {
                ...state,
                cakes: state.cakes + 1
            };

        case BUY_CAKE:
            if (state.cakes > 0) {
                return {
                    ...state,
                    cakes: state.cakes - 1
                };
            }
            console.warn("Keklər qalmayıb");
            return state;

        case INCREMENT_CAKE:
            return {
                ...state,
                cakes: state.cakes + 5
            };

        case EXTENUATE_CAKE:
            if (state.cakes >= 5) {
                return {
                    ...state,
                    cakes: state.cakes - 5
                };
            }
            console.warn("5 ədəd kek almaq üçün kifayət qədər kek yoxdur");
            return state;

        case RESET:
            return {
                ...initialValues
            };

        default:
            return state;
    }
};

export default cakeReducer;
