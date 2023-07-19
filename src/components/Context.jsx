import {useState, createContext, useContext} from 'react';

const AppContext=createContext();

export const AppProvider=({children})=>{
    const [isSidebar,setIsSidebar] = useState(false)
    const [isSubmenu,setIsSubmenu] = useState(false)

    const handleSidebar=()=>{
        setIsSidebar(!isSidebar)
        }

    const handleSubmenu=()=>{
        setIsSubmenu(!isSubmenu)
        }

    return(<AppContext.Provider value={{isSidebar,isSubmenu, handleSidebar,handleSubmenu}}>{children}</AppContext.Provider>);
}

export const useGlobalContext=()=>{
    return(useContext(AppContext))
}