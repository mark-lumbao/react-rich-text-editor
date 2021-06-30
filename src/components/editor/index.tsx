import { createContext, HtmlHTMLAttributes } from 'react';
import { useEditor, EditorContent, Editor } from '@tiptap/react';
import editorExtensions, { EditorExtensionsType } from './partials/ext';
import editorNodes from './partials/nodes';
import MenuBar from './partials/menu-bar';
import CharacterCount from './partials/character-count';
import './scss/index.scss';

export type EditorType = HtmlHTMLAttributes<HTMLDivElement> & {
  content?: string;
  extensionsConfig?: EditorExtensionsType;
  onChange?: (value: string) => void;
}

export const EditorContext = createContext<{ editor: Editor }>(null);

const EditorMain = ({
  content, onChange, extensionsConfig, ...divProps
}: EditorType) => {
  const editor = useEditor({
    content,
    onUpdate({ editor: ed }) { onChange(ed.getHTML()); },
    extensions: [
      ...editorExtensions(extensionsConfig),
      ...editorNodes,
    ],
  });

  return (
    <EditorContext.Provider value={{ editor }}>
      <div className="editor--container" {...divProps}>
        <MenuBar />
        <EditorContent editor={editor} />
        <CharacterCount {...extensionsConfig} />
      </div>
    </EditorContext.Provider>
  );
};

export default EditorMain;
