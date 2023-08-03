import React, { useContext } from 'react'
import { createContext } from 'react'
import { useLocation } from 'react-router-dom'
// import { reducer } from './reducer'

export const VideoIdContext = createContext()

export const VideoIdProvider = ({ children }) => {
        const [state, setState] = React.useState(null)
        return (
                <VideoIdContext.Provider value={[state, setState]}>
                        {children}
                </VideoIdContext.Provider>
        )
}
