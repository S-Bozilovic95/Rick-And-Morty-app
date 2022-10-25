import React, { createContext } from 'react';
import API from '../assets/api';

type InitialType = {
    fetchData: (sufix: string) => void,
}

const initialState ={
    fetchData: (sufix: string) =>{},
}

export const Context = createContext<InitialType>(initialState);

type ContextRmProviderProps ={
    children: React.ReactNode;
}

export const ContextRmProvider: React.FC<ContextRmProviderProps> = ({children}) => {

    // functions
    const fetchData =  (sufix: string) =>{
        return API.get(`/${sufix}`);
    }

    return (
        <Context.Provider value={{fetchData}}>
            {children}
        </Context.Provider>
    );
}