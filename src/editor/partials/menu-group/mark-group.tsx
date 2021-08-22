import { Fragment, useContext } from 'react';
import { EditorContext } from 'editor';
import boldSvg from 'editor/assets/icons/bold.svg';
import italicSvg from 'editor/assets/icons/italic.svg';
import underlineSvg from 'editor/assets/icons/underlined.svg';
import linkSvg from 'editor/assets/icons/link.svg';
import { IEditorMarkOptions } from 'editor/types';
import MenuGroup from './menu-group';

const MarkGroup = ({ disableLinks, disableMarks }: Partial<IEditorMarkOptions>) => {
  const { editor } = useContext(EditorContext);

  const setLink = () => {
    const url = window.prompt('URL'); // eslint-disable-line no-alert
    editor.chain().focus().setLink({ href: url }).run();
  };

  return editor && (
    <MenuGroup>
      {!disableMarks && (
        <Fragment>
          <button
            type="button"
            className={editor.isActive('bold') ? 'is-active' : ''}
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            <img alt="bold" src={boldSvg} />
          </button>
          <button
            type="button"
            className={editor.isActive('italic') ? 'is-active' : ''}
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            <img alt="italic" src={italicSvg} />
          </button>
          <button
            type="button"
            className={editor.isActive('underline') ? 'is-active' : ''}
            onClick={() => editor.chain().focus().toggleUnderline().run()}
          >
            <img alt="underline" src={underlineSvg} />
          </button>
        </Fragment>
      )}
      {!disableLinks && (
        <Fragment>
          <button
            type="button"
            className={editor.isActive('link') ? 'is-active' : ''}
            onClick={setLink}
          >
            <img alt="link" src={linkSvg} />
          </button>
          <button
            type="button"
            className={editor.isActive('link') ? 'is-active' : ''}
            onClick={() => editor.chain().focus().unsetLink().run()}
          >
            Unlink
          </button>
        </Fragment>
      )}
    </MenuGroup>
  );
};

export default MarkGroup;
