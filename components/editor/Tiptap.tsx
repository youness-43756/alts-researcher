'use client'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import ToolBar from './ToolBar'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Bold from '@tiptap/extension-bold'
import Underline from '@tiptap/extension-underline'
import Heading from '@tiptap/extension-heading'
import TextAlign from '@tiptap/extension-text-align'
import BulletList from '@tiptap/extension-bullet-list'
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Skeleton } from "@/components/ui/skeleton"
import Placeholder from '@tiptap/extension-placeholder'
import { TiptapProps } from '@/lib/dataTypes'


const Tiptap = ({ onclick }: TiptapProps) => {
    const editor = useEditor({
        content: '',
        extensions: [
            StarterKit.configure({
                paragraph: false,
                bold: false,
                document: false,
                text: false,
                heading: false,
                bulletList: false,
            }),
            Bold, Underline, Document, Paragraph, Text, TextStyle,
            Color.configure({
                types: ['textStyle'],
            }),
            Heading.configure({
                levels: [1, 2, 3],
                HTMLAttributes: {
                    class: "font-normal"
                }
            }),
            BulletList.configure({
                HTMLAttributes: {
                    class: 'list-disc list-outside',
                },
                itemTypeName: 'listItem',
                keepMarks: true,
                keepAttributes: true,
            }),
            TextAlign.configure({
                types: ['heading', "bulletList", 'paragraph'],
                defaultAlignment: "left",
                alignments: ['left', 'center'],
            }),
            Placeholder.configure({
                placeholder: ({ editor }) => {
                    if (editor?.isEmpty) {
                        return 'Type here'
                    }
                    return ""
                },
            }),
        ],
        editorProps: {
            attributes: {
                class: "w-full h-96 shadow-sm rounded-md border md:p-8 p-6 overflow-hidden focus-visible:outline-none",
            },
        },
        onUpdate({ editor }) {
            onclick(editor.getHTML());
        },
    })
    if (!editor) {
        return (
            <div className='w-full h-full flex flex-col space-y-2 mt-2'>
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-96 w-full" />
            </div>
        )
    }

    return (
        <div className='max-w-full h-full flex flex-col md:gap-4 gap-2'>
            <ScrollArea className="w-full whitespace-nowrap rounded-md border shadow-sm">
                <ToolBar editor={editor} />
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <EditorContent editor={editor} />
        </div>
    )
}
export default Tiptap
