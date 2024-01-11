import {createContext, RefObject, useContext} from "react";

export const FloatingContainerContext = createContext<RefObject<HTMLElement> | undefined>(undefined)

export const useFloatingContainerContext = (): RefObject<HTMLElement> | undefined => {
    return useContext(FloatingContainerContext)
}