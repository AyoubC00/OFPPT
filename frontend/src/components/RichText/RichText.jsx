import { LexicalComposer } from "@lexical/react/LexicalComposer"
import { ContentEditable } from "@lexical/react/LexicalContentEditable"
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin"

function RichText() {
    const config = {
        namespace: 'rich',
        theme: {
            placeholder: "editor-placeholder"
        }
    }

    const Placeholder = () => <div className="editor-placeholder">Sujet d'annonce</div>

    return (
        <LexicalComposer initialConfig={ config }>
            <div className="editor-container">
                <div className="editor-inner">
                    <RichTextPlugin 
                        contentEditable={ <ContentEditable className="editor-input"/> }
                        placeholder={ <Placeholder /> }
                    />
                </div>
            </div>
        </LexicalComposer>
    );
}

export default RichText