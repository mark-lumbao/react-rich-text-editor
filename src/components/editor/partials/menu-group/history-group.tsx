import { useContext } from 'react';
import { EditorContext } from 'components/editor';
import undoSvg from 'components/editor/assets/icons/undo.svg';
import redoSvg from 'components/editor/assets/icons/redo.svg';
import MenuGroup from './menu-group';

const HistoryGroup = () => {
  const { editor } = useContext(EditorContext);

  return editor && (
    <MenuGroup>
      <button type="button" onClick={() => editor.chain().focus().undo().run()}>
        <img alt="undo" src={undoSvg} />
      </button>
      <button type="button" onClick={() => editor.chain().focus().redo().run()}>
        <img alt="redo" src={redoSvg} />
      </button>
    </MenuGroup>
  );
};

export default HistoryGroup;
