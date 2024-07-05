"use client";
import { createContext, useState, Dispatch, SetStateAction } from "react";
interface SearchContextType {
    searchField: string;
    setSearchField: Dispatch<SetStateAction<string>>;
    data: string;
    setData: Dispatch<SetStateAction<string>>;
    view: string;
    setView: Dispatch<SetStateAction<string>>;
}
export const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
    const [searchField, setSearchField] = useState<string>("");
    const [data, setData] = useState<string>("");
    const [view, setView] = useState<string>("");


    return (
        <SearchContext.Provider value={{ setSearchField, searchField, data, setData, view, setView }}>
            {children}
        </SearchContext.Provider>
    )
}