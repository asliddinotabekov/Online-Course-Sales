import React from 'react'
import { createContext } from 'react'


export const    IsCoursesContext  = createContext()

export const IsCoursesProvider =({children}) =>{
        const [iscrs , setiscrs] =React.useState(true)
        return(
            <IsCoursesContext.Provider value={[iscrs , setiscrs]}>
                    {children}
            </IsCoursesContext.Provider>
        )
}