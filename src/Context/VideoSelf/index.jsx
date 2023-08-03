import React, { useContext } from 'react'
import { createContext } from 'react'
import { useLocation } from 'react-router-dom'
// import { reducer } from './reducer'

export const VideoSelfContext = createContext()

export const VideoSelf = ({ children }) => {
        const [state, setState] = React.useState(null)
        return (
                <VideoSelfContext.Provider value={[state, setState]}>
                        {children}
                </VideoSelfContext.Provider>
        )
}
