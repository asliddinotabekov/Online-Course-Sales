import React from 'react'
import { createContext } from 'react'
import { useLocation } from 'react-router-dom'
// import { reducer } from './reducer'


export const NextPathContext = createContext()

export const NextPathProvider = ({ children }) => {
        const location = useLocation()
        const { pathname } = location
        let son = pathname.lastIndexOf("/")
        const InitleValue = pathname.slice(son + 1)
        const [state, setState] = React.useState(InitleValue)
        return (
                <NextPathContext.Provider value={[state, setState]}>
                        {children}
                </NextPathContext.Provider>
        )
}