import { useContext } from 'react';
import { EditorContext } from 'components/editor';
import MenuGroup from './menu-group';

const HistoryGroup = () => {
  const { editor } = useContext(EditorContext);

  return editor && (
    <MenuGroup>
      <button type="button" onClick={() => editor.chain().focus().undo().run()}>Undo</button>
      <button type="button" onClick={() => editor.chain().focus().redo().run()}>Redo</button>
    </MenuGroup>
  );
};

export default HistoryGroup;
