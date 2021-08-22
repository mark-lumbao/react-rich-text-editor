import { useContext } from 'react';
import { EditorContext } from 'editor';
import listSvg from 'editor/assets/icons/checklist.svg';
import MenuGroup from './menu-group';

const TasklistGroup = () => {
  const { editor } = useContext(EditorContext);

  return editor && (
    <MenuGroup>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleTaskList().run()}
        className={editor.isActive('taskList') ? 'is-active' : ''}
      >
        <img alt="checklist" src={listSvg} />
      </button>
    </MenuGroup>
  );
};

export default TasklistGroup;
