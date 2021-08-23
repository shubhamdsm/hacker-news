import React,{ useReducer, useEffect } from 'react'
import reducer from '../reducer';
import { SET_LOADING, SET_NEWS } from '../actions';
export const AppContext = React.createContext();


const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'
const initialState = {
    loading:false,
    news: [],
    search:'javascript',
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
            console.log(data)
            dispatch({type: SET_NEWS,
            payload: { news: data.hits, nbPages:data.nbPages}
            })
        } catch(error){
            console.log(error)
        }
    }

    useEffect(()=> {
        fetchNews(`${API_ENDPOINT}query=${state.search}&page=${state.page}`)
    },[state.search, state.page])
    
    return(
        <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
    )
}
export {AppProvider}
