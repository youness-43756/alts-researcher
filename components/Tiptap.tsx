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


const Tiptap = ({ description, onclick }:
    { description: string, onclick: (richText: string) => void }) => {
    const editor = useEditor({
        content: '',
        extensions: [
            StarterKit.configure({}),

            Bold, Underline, Document, Paragraph, Text, TextStyle,
            Color.configure({
                types: ['textStyle'],
            }),
            Heading.configure({
                levels: [1, 2],
                HTMLAttributes: {
                    class: "font-semibold"
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
                alignments: ['left', 'right', 'center'],
            }),
        ],
        editorProps: {
            attributes: {
                class: "w-full min-h-56 drop-shadow-sm rounded-md border border-input bg-background md:px-6 md:py-5 px-3 py-1.5 font-normal text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#538392] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mx-auto lowercase",
            },
        },
        onUpdate({ editor }) {
            onclick(editor.getHTML());

        },
    })

    return (
        <div className='md:max-w-full space-y-2'>
            <ToolBar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    )
}

export default Tiptap