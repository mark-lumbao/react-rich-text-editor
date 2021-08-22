import { useContext } from 'react';
import { EditorContext } from 'editor';
import h1Svg from 'editor/assets/icons/h1.svg';
import h2Svg from 'editor/assets/icons/h2.svg';
import h3Svg from 'editor/assets/icons/h3.svg';
import MenuGroup from './menu-group';

const HeadingGroup = () => {
  const { editor } = useContext(EditorContext);

  return editor && (
    <MenuGroup>
      <button
        type="button"
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        <img alt="h1" src={h1Svg} />
      </button>
      <button
        type="button"
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        <img alt="h2" src={h2Svg} />
      </button>
      <button
        type="button"
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      >
        <img alt="h3" src={h3Svg} />
      </button>
    </MenuGroup>
  );
};

export default HeadingGroup;
