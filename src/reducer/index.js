
import { SET_LOADING, SET_NEWS, REMOVE_NEWS, HANDLE_SEARCH, HANDLE_PAGE } from "../actions";
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
        case REMOVE_NEWS:
            return{
                ...state,
                news: state.news.filter(item => item.objectID !== action.payload)

            } 
        case HANDLE_SEARCH:
            return{
                ...state,
                search: action.payload,
                pages: 0
            }   
        case HANDLE_PAGE:
            if(action.payload ==='next'){
                let nextpage = state.page + 1;
                if(nextpage > state.nbPages - 1){
                    nextpage = 0
                }
                return {...state, page: nextpage}
            }
            if(action.payload === 'prev'){
                let prevpage = state.page -1;
                if(prevpage < 0){
                    prevpage = state.nbPages - 1
                } 
                return {...state, page: prevpage}     
             }
             
        break;
         default:
            throw new Error(`something went wrong no matching ${action.type} action type `)   
    }
}

export default reducer
