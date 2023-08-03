import React, { createContext } from "react";

export const SidebarContext =createContext()

export const SidebarProvider = ({children})=>{
    const [sidebar, setSidebar] = React.useState(true)
    return(
        <SidebarContext.Provider value={[sidebar, setSidebar]}>
            {children}
        </SidebarContext.Provider>
    )
}

export default SidebarProvider