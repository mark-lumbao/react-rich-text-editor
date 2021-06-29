import { useContext } from 'react';
import { EditorContext } from 'components/editor/tiptap';

const MarkupGroup = () => {
  const { editor } = useContext(EditorContext);

  return editor && (
    <div className="editor--menu-group">
      <button type="button" onClick={() => editor.chain().focus().setHorizontalRule().run()}>---</button>
    </div>
  );
};

export default MarkupGroup;
