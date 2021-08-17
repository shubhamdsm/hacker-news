import React from 'react'
export const AppContext = React.createContext();


const AppProvider = ({children}) => {
    return(
        <AppContext.Provider>{children}</AppContext.Provider>
    )
}
export {AppProvider}
