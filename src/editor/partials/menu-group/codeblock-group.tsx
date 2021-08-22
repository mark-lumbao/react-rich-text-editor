import { useContext } from 'react';
import { EditorContext } from 'editor';
import codeSvg from 'editor/assets/icons/programming.svg';
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
        <img alt="code" src={codeSvg} />
      </button>
    </MenuGroup>
  );
};

export default CodeblockGroup;
