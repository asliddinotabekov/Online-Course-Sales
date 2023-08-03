import React from 'react'
import { createContext } from 'react'
import { useLocation } from 'react-router-dom'
// import { reducer } from './reducer'


export const PathContext = createContext()

export const PathProvider = ({ children }) => {
        const location = useLocation()
        const { pathname } = location
        let count = null
        for (let i of pathname) {
                i === "/" && (count += 1)

        }

        let result = null
        if (count >= 4) {
                let oxiri = pathname.lastIndexOf("/")
                let boshi = pathname.lastIndexOf("/", oxiri - 1)
                result = pathname.slice(boshi + 1, oxiri)
        } else {
                let son = pathname.lastIndexOf("/")
                result = pathname.slice(son + 1)
        }

        const [state, setState] = React.useState(result)
        return (
                <PathContext.Provider value={[state, setState]}>
                        {children}
                </PathContext.Provider>
        )
}