"use client";
import { createContext, useState, Dispatch, SetStateAction } from "react";
interface SearchContextType {
    searchField: string;
    setSearchField: Dispatch<SetStateAction<string>>;
    data: string;
    SetData: Dispatch<SetStateAction<string>>;
}
export const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
    const [searchField, setSearchField] = useState<string>("");
    const [data, SetData] = useState<string>("");


    return (
        <SearchContext.Provider value={{ setSearchField, searchField, data, SetData }}>
            {children}
        </SearchContext.Provider>
    )
}