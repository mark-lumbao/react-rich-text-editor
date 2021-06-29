import { useEditor, EditorContent } from '@tiptap/react';
import editorExtensions, { EditorExtensionsType } from './partials/ext';
import editorNodes from './partials/nodes';
import MenuBar from './partials/menu-bar';
import CharacterCount from './partials/character-count';

export type EditorType = {
  content?: string,
  extensionsConfig?: EditorExtensionsType,
}

const Editor = ({ content, extensionsConfig }: EditorType) => {
  const editor = useEditor({
    extensions: [
      ...editorExtensions(extensionsConfig),
      ...editorNodes,
    ],
    content,
  });

  return (
    <div className="editor--container">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
      <CharacterCount editor={editor} {...extensionsConfig} />
    </div>
  );
};

export default Editor;
