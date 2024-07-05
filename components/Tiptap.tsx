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
import { useRef } from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"

const Tiptap = ({ description, onclick }:
    { description: string, onclick: (richText: string) => void }) => {
    // const tiptapRef = useRef();

    const editor = useEditor({
        content: '',
        extensions: [
            StarterKit.configure({
            }),
            Bold, Underline, Document, Paragraph, Text, TextStyle,
            Color.configure({
                types: ['textStyle'],
            }),
            Heading.configure({
                levels: [1, 2],

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
                types: ['heading', 'paragraph'],
                defaultAlignment: "left",
                alignments: ['left', 'right', 'center'],
            }),
        ],
        editorProps: {
            attributes: {
                class: "w-full max-h-80 h-80 focus-visible:outline-none",
            },
        },
        onUpdate({ editor }) {
            onclick(editor.getHTML());

        },
    })
    return (
        <div className='w-full h-full flex flex-col space-y-2'>
            <div className=''>
                <ToolBar editor={editor} />
            </div>
            <ScrollArea className='h-80 rounded-md border p-6 md:px-8 px-6'>
                <EditorContent editor={editor} />
            </ScrollArea>
        </div>
    )
}
// border border-2 border-input rounded-xl 
export default Tiptap
