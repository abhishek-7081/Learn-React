import { useContext, createContext} from "react";

export const themecontext= createContext({
    themeMode:'light',
    darkTheme:()=>{},
    lightTheme:()=> {},

})

export const ThemeProvider=themecontext.Provider;

export default function useTheme(){
    return useContext(themecontext)
}