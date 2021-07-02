import { useContext } from 'react';
import { EditorContext } from 'components/editor';
import MenuGroup from './menu-group';

const CodeblockGroup = () => {
  const { editor } = useContext(EditorContext);
  return editor && (
    <MenuGroup>
      <button
        type="button"
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
      >
        Code
      </button>
    </MenuGroup>
  );
};

export default CodeblockGroup;
