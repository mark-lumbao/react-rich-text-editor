import { useContext } from 'react';
import { EditorContext } from 'components/editor';
import MenuGroup from './menu-group';

const MarkGroup = () => {
  const { editor } = useContext(EditorContext);

  const setLink = () => {
    const url = window.prompt('URL');

    editor.chain().focus().setLink({ href: url }).run();
  };

  return (
    <MenuGroup>
      <button
        type="button"
        className={editor.isActive('bold') ? 'is-active' : ''}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        Bold
      </button>
      <button
        type="button"
        className={editor.isActive('italic') ? 'is-active' : ''}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        Italic
      </button>
      <button
        type="button"
        className={editor.isActive('underline') ? 'is-active' : ''}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        Underline
      </button>
      <button
        type="button"
        className={editor.isActive('link') ? 'is-active' : ''}
        onClick={setLink}
      >
        Link
      </button>
      <button
        type="button"
        className={editor.isActive('link') ? 'is-active' : ''}
        onClick={() => editor.chain().focus().unsetLink().run()}
      >
        Unlink
      </button>
    </MenuGroup>
  );
};

export default MarkGroup;
