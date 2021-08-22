import { Fragment, useContext } from 'react';
import { EditorContext } from 'components/editor';
import { IEditorNodeOptions } from 'components/editor/types';
import hrSvg from 'components/editor/assets/icons/horizontal-line.svg';
import imgSvg from 'components/editor/assets/icons/image.svg';
import bulettedSvg from 'components/editor/assets/icons/list_bulleted.svg';
import numberedSvg from 'components/editor/assets/icons/list_numbered.svg';
import MenuGroup from './menu-group';

const MarkupGroup = ({
  disableHorizontalRule, disableImage, disableList,
}: Partial<IEditorNodeOptions>) => {
  const { editor } = useContext(EditorContext);

  const addImage = () => {
    const url = window.prompt('URL'); // eslint-disable-line no-alert
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return editor && (
    <MenuGroup>
      {!disableHorizontalRule && (
        <button type="button" onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          <img alt="horizontal line" src={hrSvg} />
        </button>
      )}
      {!disableImage && (
        <button type="button" onClick={addImage}>
          <img alt="icon-img" src={imgSvg} />
        </button>
      )}
      {!disableList && (
        <Fragment>
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
        </Fragment>
      )}
    </MenuGroup>
  );
};

export default MarkupGroup;
