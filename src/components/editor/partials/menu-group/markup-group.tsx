import { useContext } from 'react';
import { EditorContext } from 'components/editor';
import hrSvg from 'components/editor/assets/icons/horizontal-line.svg';
import imgSvg from 'components/editor/assets/icons/image.svg';
import bulettedSvg from 'components/editor/assets/icons/list_bulleted.svg';
import numberedSvg from 'components/editor/assets/icons/list_numbered.svg';
import MenuGroup from './menu-group';

const MarkupGroup = () => {
  const { editor } = useContext(EditorContext);

  const addImage = () => {
    const url = window.prompt('URL');

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return editor && (
    <MenuGroup>
      <button type="button" onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        <img alt="horizontal line" src={hrSvg} />
      </button>
      <button type="button" onClick={addImage}>
        <img alt="icon-img" src={imgSvg} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        <img alt="buletted" src={bulettedSvg} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        <img alt="numbered" src={numberedSvg} />
      </button>
    </MenuGroup>
  );
};

export default MarkupGroup;
