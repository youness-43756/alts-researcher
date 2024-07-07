"use client"
import { SearchContext } from "@/context/searchContext";
import Tiptap from "../editor/Tiptap";
import { useContext } from "react";


export default function ResearchForm() {
    const context = useContext(SearchContext);
    if (!context) {
        return;
    }
    const { getEditorContent } = context;

    return (
        <>
            <Tiptap onclick={(richText: string) => getEditorContent(richText)} />
        </>
    )
}
