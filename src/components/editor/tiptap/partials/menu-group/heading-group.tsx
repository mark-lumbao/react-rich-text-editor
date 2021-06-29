import { Editor } from '@tiptap/react';

const HeadingGroup = ({ editor }: { editor: Editor }) => editor && (
  <div className="editor--menu-group">
    <button
      type="button"
      className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
    >
      H1
    </button>
    <button
      type="button"
      className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
    >
      H2
    </button>
    <button
      type="button"
      className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
      onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
    >
      H3
    </button>
  </div>
);

export default HeadingGroup;
