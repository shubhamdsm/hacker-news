
import { SET_LOADING, SET_NEWS } from "../actions";
const reducer = (state,action) => {
    switch (action.type) {
        case SET_LOADING:
            return {...state, loading:true}
        case SET_NEWS:
            return{...state, 
                loading:false,
                news:action.payload.news,
                nbPages:action.payload.nbPages
            }
        default:
            throw new Error(`something went wrong no matching ${action.type} action type `)   
    }
}

export default reducer
