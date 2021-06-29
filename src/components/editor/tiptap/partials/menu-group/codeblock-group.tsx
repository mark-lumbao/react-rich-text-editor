import { Editor } from '@tiptap/react';

const CodeblockGroup = ({ editor }: { editor: Editor }) => editor && (
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

export default CodeblockGroup;
