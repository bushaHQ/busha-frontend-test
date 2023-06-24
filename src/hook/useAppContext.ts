import { useContext } from "react";
import {AppContext, AppContextProps} from "../context/appContext"

export function useAppContext(): AppContextProps| null{
    return useContext(AppContext);
}