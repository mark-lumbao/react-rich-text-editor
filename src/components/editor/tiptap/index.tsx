import { useEditor, EditorContent } from '@tiptap/react';
import editorExtensions, { EditorExtensionsType } from './partials/ext';
import editorNodes from './partials/nodes';
import MenuBar from './partials/menu-bar';

export type EditorType = {
  content?: string,
  extensionsConfig?: EditorExtensionsType,
}

const Editor = ({
  content, extensionsConfig: { limit, useCharacterCount, ...restExt },
}: EditorType) => {
  const editor = useEditor({
    extensions: [
      ...editorExtensions({ limit, useCharacterCount, ...restExt }),
      ...editorNodes,
    ],
    content,
  });

  return (
    <div className="editor--container">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
      {useCharacterCount && (
        <div className="character-count">
          {editor && `
            ${editor.getCharacterCount()}
            ${limit !== undefined ? `/${limit}` : ''}
            characters
            `}
        </div>
      )}
    </div>
  );
};

export default Editor;
