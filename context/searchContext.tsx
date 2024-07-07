"use client";
import { createContext, useState, Dispatch, SetStateAction } from "react";
interface SearchContextType {
    searchField: string;
    setSearchField: Dispatch<SetStateAction<string>>;
    editorContent: string;
    setEditorContent: Dispatch<SetStateAction<string>>;
    view: string;
    setView: Dispatch<SetStateAction<string>>;
    getEditorContent: (content: string) => void
}

export const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {

    const [searchField, setSearchField] = useState<string>("");
    const [view, setView] = useState<string>("medium");
    const [editorContent, setEditorContent] = useState("");
    function getEditorContent(content: string) {
        setEditorContent(content);
    }

    return (
        <SearchContext.Provider value={
            {
                setSearchField,
                searchField,
                editorContent,
                setEditorContent,
                view,
                setView,
                getEditorContent
            }}>
            {children}
        </SearchContext.Provider>
    )
}