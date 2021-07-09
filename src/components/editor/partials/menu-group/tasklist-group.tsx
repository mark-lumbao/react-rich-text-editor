import { useContext } from 'react';
import { EditorContext } from 'components/editor';
import listSvg from 'components/editor/assets/icons/checklist.svg';
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
