"use client"
import { type Editor } from "@tiptap/react";
import { AlignCenter, AlignLeft, AlignRight, Bold, Heading1, Heading2, List, PaintRoller, Redo, Save, Underline, Undo } from "lucide-react";
import { Button } from "../ui/button";
import clsx from "clsx";
import TooltipPage from "../tooltipComponent/tooltipPage";
import { useContext } from "react";
import { SearchContext } from "@/context/searchContext";

type Props = {
    editor: Editor | null
}
const toolBarIcons = "h-4 w-4";
const Colors = [
    { textColor: "#000000", bgColor: "bg-black", testid: "setBlack" },
    { textColor: "#FF0000", bgColor: "bg-red-500", testid: "setRed" },
    { textColor: "#008000", bgColor: "bg-green-500", testid: "setGreen" },
    { textColor: "#FFA500", bgColor: "bg-orange-500", testid: "setOrange" },
    { textColor: "#0000FF", bgColor: "bg-blue-500", testid: "setBlue" }
];

export default function ToolBar({ editor }: Props) {
    const context = useContext(SearchContext);
    if (!editor) {
        return null;
    }
    if (!context) {
        return;
    }

    const { editorContent } = context;
    const SaveEditorContentToDatabase = () => {
        console.log(editorContent);
    }

    return (
        <nav className="bg-transparent rounded-md md:p-2 px-2 py-1 w-max space-x-1 text-center">
            <TooltipPage
                trigger={<Button variant={"ghost"} size={"sm"}
                    className={clsx("max-md:px-0 max-md:mr-1", editor.isActive('textStyle') && "md:bg-accent")}
                    onClick={() => editor.chain().focus().unsetColor().run()}
                    data-testid="unsetColor"
                >
                    <PaintRoller className={toolBarIcons} />
                </Button>}
                content={Colors.map(color => (
                    <button key={color.textColor}
                        onClick={() => editor.chain().focus().setColor(color.textColor).run()}
                        className={clsx(editor.isActive('textStyle', { color: color.textColor }) && "opacity-60 scale-110 mx-0.5")}
                        data-testid={color.testid}
                    >
                        <div className={`${color.bgColor} w-7 h-7 rounded-sm hover:opacity-60 hover:scale-105`}></div>
                    </button>
                ))} />


            {/* //! Heading */}
            <nav className="border border-input bg-transparent rounded-md p-1 w-fit space-x-1 inline-flex">
                <Button variant={"ghost"} size={"sm"}
                    className={clsx("", editor.isActive('heading', { level: 1 }) && "bg-accent")}
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                >
                    <Heading1 className={toolBarIcons} />
                </Button>
                <Button variant={"ghost"} size={"sm"}
                    className={clsx("", editor.isActive('heading', { level: 2 }) && "bg-accent")}
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                >
                    <Heading2 className={toolBarIcons} />
                </Button>
            </nav>
            <Button variant={'ghost'} size={"sm"}
                className={clsx("", editor.isActive('bold') && "bg-accent")}
                onClick={() => editor.chain().focus().toggleBold().run()}
            >
                <Bold className={toolBarIcons} />
            </Button>

            <Button variant={"ghost"} size={"sm"}
                className={clsx("", editor.isActive('underline') && "bg-accent")}
                onClick={() => editor.chain().focus().toggleUnderline().run()}
            >
                <Underline className={toolBarIcons} />
            </Button>
            <Button variant={"ghost"} size={"sm"}
                className={clsx("", editor.isActive('bulletList') && "bg-accent")}
                onClick={() => editor.chain().focus().toggleBulletList().run()}
            >
                <List className={toolBarIcons} />
            </Button>

            {/* //!alignement */}
            <nav className="border border-input bg-transparent rounded-md p-1 w-fit space-x-1 inline-flex">
                <Button variant={"ghost"} size={"sm"}
                    className={clsx("", editor.isActive({ textAlign: 'left' }) && "bg-accent")}
                    onClick={() => editor.chain().focus().setTextAlign('left').run()}
                >
                    <AlignLeft className={toolBarIcons} />
                </Button>
                <Button variant={"ghost"} size={"sm"}
                    className={clsx("", editor.isActive({ textAlign: 'center' }) && "bg-accent")}
                    onClick={() => editor.chain().focus().setTextAlign('center').run()}
                >
                    <AlignCenter className={toolBarIcons} />
                </Button>
            </nav>

            {/* //! Undo & Redo */}
            <nav className="w-fit inline-flex">
                <Button variant={"ghost"} size={"sm"}
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={!editor.can().chain().focus().undo().run()}
                >
                    <Undo className={toolBarIcons} />
                </Button>
                <Button variant={"ghost"} size={"sm"}
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={!editor.can().chain().focus().redo().run()}
                >
                    <Redo className={toolBarIcons} />
                </Button>
            </nav>
            <Button
                variant={"save"} size={"sm"} className="md:ml-4"
                onClick={SaveEditorContentToDatabase}
            >
                <Save className={toolBarIcons} />
            </Button>
        </nav>
    )
}
