import React,{ useReducer, useEffect } from 'react'
import reducer from '../reducer';
import { HANDLE_PAGE, HANDLE_SEARCH, REMOVE_NEWS, SET_LOADING, SET_NEWS } from '../actions';
export const AppContext = React.createContext();


const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'
const initialState = {
    loading:false,
    news: [],
    search:'',
    page: 0,
    nbPages: 0,

}

const AppProvider = ({children}) => {
    const [ state, dispatch] = useReducer(reducer, initialState)

    const fetchNews = async (url) => {
         dispatch({type: SET_LOADING})
        try{
            const res = await fetch(url)
            const data = await res.json()
            dispatch({type: SET_NEWS,
            payload: { news: data.hits, nbPages:data.nbPages}
            })
        } catch(error){
            console.log(error)
        }
    }
    const removeNews = (id) => {
        dispatch({type:REMOVE_NEWS, payload:id})

    }
    const handleSearch = (search) => {
        dispatch({type:HANDLE_SEARCH, payload:search})
    }
    const handlePage = (val) => {
        dispatch({type: HANDLE_PAGE, payload: val})
    } 
    useEffect(()=> {
        fetchNews(`${API_ENDPOINT}query=${state.search}&page=${state.page}`)
    },[state.search, state.page])
    
    return(
        <AppContext.Provider value={{...state, removeNews, handleSearch, handlePage}}>{children}</AppContext.Provider>
    )
}
export {AppProvider}
