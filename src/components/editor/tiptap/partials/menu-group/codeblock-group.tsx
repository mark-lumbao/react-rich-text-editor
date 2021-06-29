import { useContext } from 'react';
import { EditorContext } from 'components/editor/tiptap';

const CodeblockGroup = () => {
  const { editor } = useContext(EditorContext);
  return editor && (
    <div className="editor--menu-group">
      <button
        type="button"
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
      >
        Code
      </button>
    </div>
  );
};

export default CodeblockGroup;
