import { useContext } from 'react';
import { EditorContext } from 'components/editor/tiptap';

const HistoryGroup = () => {
  const { editor } = useContext(EditorContext);

  return editor && (
    <div className="editor--menu-group">
      <button type="button" onClick={() => editor.chain().focus().undo().run()}>Undo</button>
      <button type="button" onClick={() => editor.chain().focus().redo().run()}>Redo</button>
    </div>
  );
};

export default HistoryGroup;
