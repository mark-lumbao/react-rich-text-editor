import { useContext } from 'react';
import { EditorContext } from 'components/editor';
import tableSvg from 'components/editor/assets/icons/table.svg';
import MenuGroup from './menu-group';

const TableGroup = () => {
  const { editor } = useContext(EditorContext);
  return editor && (
    <MenuGroup>
      <button type="button" onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}>
        <img alt="table" src={tableSvg} />
      </button>
      <button type="button" onClick={() => editor.chain().focus().addColumnBefore().run()} disabled={!editor.can().addColumnBefore()}>
        add column before
      </button>
      <button type="button" onClick={() => editor.chain().focus().addColumnAfter().run()} disabled={!editor.can().addColumnAfter()}>
        add column after
      </button>
      <button type="button" onClick={() => editor.chain().focus().addRowBefore().run()} disabled={!editor.can().addRowBefore()}>
        add row before
      </button>
      <button type="button" onClick={() => editor.chain().focus().addRowAfter().run()} disabled={!editor.can().addRowAfter()}>
        add row after
      </button>
      <button type="button" onClick={() => editor.chain().focus().deleteColumn().run()} disabled={!editor.can().deleteColumn()}>
        delete column
      </button>
      <button type="button" onClick={() => editor.chain().focus().deleteRow().run()} disabled={!editor.can().deleteRow()}>
        delete row
      </button>
      <button type="button" onClick={() => editor.chain().focus().deleteTable().run()} disabled={!editor.can().deleteTable()}>
        delete table
      </button>
      <button type="button" onClick={() => editor.chain().focus().mergeCells().run()} disabled={!editor.can().mergeCells()}>
        merge cells
      </button>
      <button type="button" onClick={() => editor.chain().focus().splitCell().run()} disabled={!editor.can().splitCell()}>
        split cell
      </button>
    </MenuGroup>
  );
};

export default TableGroup;
