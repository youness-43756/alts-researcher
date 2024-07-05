"use client"
import { SearchContext } from "@/context/searchContext";
import { useContext } from "react";

export default function Wrapper() {
    const context = useContext(SearchContext);
    if (!context) {
        return;
    }
    const { searchField } = context;

    return (
        <div className="h-full flex items-center justify-center">
            no data!!!!! : {searchField}
        </div>
    )
}
