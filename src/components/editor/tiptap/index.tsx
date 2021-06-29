import { createContext } from 'react';
import { useEditor, EditorContent, Editor } from '@tiptap/react';
import editorExtensions, { EditorExtensionsType } from './partials/ext';
import editorNodes from './partials/nodes';
import MenuBar from './partials/menu-bar';
import CharacterCount from './partials/character-count';

export type EditorType = {
  content?: string,
  extensionsConfig?: EditorExtensionsType,
}

export const EditorContext = createContext<{ editor: Editor }>(null);

const EditorMain = ({ content, extensionsConfig }: EditorType) => {
  const editor = useEditor({
    extensions: [
      ...editorExtensions(extensionsConfig),
      ...editorNodes,
    ],
    content,
  });

  return (
    <EditorContext.Provider value={{ editor }}>
      <div className="editor--container">
        <MenuBar />
        <EditorContent editor={editor} />
        <CharacterCount {...extensionsConfig} />
      </div>
    </EditorContext.Provider>
  );
};

export default EditorMain;
