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
        <div className="h-full w-full flex items-center justify-center text-muted text-2xl font-semibold">
            <span className="select-none">No data!</span>
        </div>
    )
}
