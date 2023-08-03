import React from 'react'
import { createContext } from 'react'
import { reducer } from './reducer'


export const    RouteFunctionContext  = createContext()

export const RouteFunctionProvider =({children}) =>{
        const [state, dispach] =React.useReducer(reducer,{})
        return(
            <RouteFunctionContext.Provider value={[state, dispach]}>
                    {children}
            </RouteFunctionContext.Provider>
        )
}