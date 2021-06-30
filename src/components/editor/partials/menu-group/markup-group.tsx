import { useContext } from 'react';
import { EditorContext } from 'components/editor';

const MarkupGroup = () => {
  const { editor } = useContext(EditorContext);

  const addImage = () => {
    const url = window.prompt('URL');

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return editor && (
    <div className="editor--menu-group">
      <button type="button" onClick={() => editor.chain().focus().setHorizontalRule().run()}>---</button>
      <button type="button" onClick={addImage}>Image</button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') && 'is-active'}
      >
        Bulleted
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') && 'is-active'}
      >
        Ordered
      </button>
    </div>
  );
};

export default MarkupGroup;
