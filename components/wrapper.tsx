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
        <div className="-z-50 fixed top-0 left-0 right-0 bottom-0 max-w-[1440px] mx-auto flex justify-center items-center mt-90">
            <span className="text-slate-900/20 font-semibold tracking-wide select-none md:text-2xl text-xl">
                no data!
            </span>
        </div>
    )
}
