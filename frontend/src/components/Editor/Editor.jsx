import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { IconButton, Option, Select, Typography } from "@material-tailwind/react";
import { FaAlignCenter, FaAlignJustify, FaAlignLeft, FaAlignRight, FaBold, FaItalic, FaLink, FaStrikethrough, FaUnderline } from "react-icons/fa"
const Editor = () =>
{
    function Placeholder() {
        return <div className="editor-placeholder absolute start-0 top-0 p-2 pointer-events-none">Enter some rich text...</div>;
    }
    const editorConfig = {
        theme: {
            placeholder: "editor-placeholder",
        },
        onError(error) {
            throw error;
        },
    }

    const Toolbar = () =>
    {
        return (
            <div className="flex shadow-sm p-1 items-center bg-blue-gray-200">
                <div className="w-32">
                    <Select size="md" 
                        placeholder="Heading"
                        className="w-32"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        arrow={ false }
                    >
                        <Option size="sm">h1</Option>
                        <Option size="sm">h2</Option>
                        <Option size="sm">h3</Option>
                        <Option size="sm">h4</Option>
                        <Option size="sm">h5</Option>
                        <Option size="sm">h6</Option>
                    </Select>
                </div>
                <IconButton size="sm" className="shadow-none bg-transparent text-blue-gray-900 hover:shadow-none hover:bg-blue-gray-300">
                    <FaBold />
                </IconButton>
                <IconButton size="sm" className="shadow-none bg-transparent text-blue-gray-900 hover:shadow-none hover:bg-blue-gray-300">
                    <FaItalic />
                </IconButton>
                <IconButton size="sm" className="shadow-none bg-transparent text-blue-gray-900 hover:shadow-none hover:bg-blue-gray-300">
                    <FaUnderline />
                </IconButton>
                <IconButton size="sm" className="shadow-none bg-transparent text-blue-gray-900 hover:shadow-none hover:bg-blue-gray-300">
                    <FaStrikethrough />
                </IconButton>
                <IconButton size="sm" className="shadow-none bg-transparent text-blue-gray-900 hover:shadow-none hover:bg-blue-gray-300">
                    <FaLink />
                </IconButton>
                <Typography variant="small" className="px-1">|</Typography>
                <IconButton size="sm" className="shadow-none bg-transparent text-blue-gray-900 hover:shadow-none hover:bg-blue-gray-300">
                    <FaAlignJustify />
                </IconButton>
                <IconButton size="sm" className="shadow-none bg-transparent text-blue-gray-900 hover:shadow-none hover:bg-blue-gray-300">
                    <FaAlignRight />
                </IconButton>
                <IconButton size="sm" className="shadow-none bg-transparent text-blue-gray-900 hover:shadow-none hover:bg-blue-gray-300">
                    <FaAlignCenter />
                </IconButton>
                <IconButton size="sm" className="shadow-none bg-transparent text-blue-gray-900 hover:shadow-none hover:bg-blue-gray-300">
                    <FaAlignLeft />
                </IconButton>
            </div>
        )
    }
    
    return (
        <LexicalComposer initialConfig={editorConfig}>
            <div className="editor-container !border-blue-gray-200 rounded-md" style={{ border: ".1rem solid" }}>
                <Toolbar />
                <div className="editor-inner relative">
                    <RichTextPlugin
                        contentEditable={<ContentEditable className="editor-input p-2 h-64 max-h-64 overflow-auto outline-none" />}
                        placeholder={<Placeholder />}
                        ErrorBoundary={LexicalErrorBoundary}
                    />
                </div>
            </div>
        </LexicalComposer>
    )
}

export default Editor