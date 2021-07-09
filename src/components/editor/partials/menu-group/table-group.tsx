import { useContext } from 'react';
import { EditorContext } from 'components/editor';
import tableSvg from 'components/editor/assets/icons/table.svg';
import MenuGroup from './menu-group';

const TableGroup = () => {
  const { editor } = useContext(EditorContext);
  return (
    <MenuGroup>
      <button type="button" onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}>
        <img alt="table" src={tableSvg} />
      </button>
      <button type="button" onClick={() => editor.chain().focus().addColumnBefore().run()} disabled={!editor.can().addColumnBefore()}>
        addColumnBefore
      </button>
      <button type="button" onClick={() => editor.chain().focus().addColumnAfter().run()} disabled={!editor.can().addColumnAfter()}>
        addColumnAfter
      </button>
      <button type="button" onClick={() => editor.chain().focus().deleteColumn().run()} disabled={!editor.can().deleteColumn()}>
        deleteColumn
      </button>
      <button type="button" onClick={() => editor.chain().focus().addRowBefore().run()} disabled={!editor.can().addRowBefore()}>
        addRowBefore
      </button>
      <button type="button" onClick={() => editor.chain().focus().addRowAfter().run()} disabled={!editor.can().addRowAfter()}>
        addRowAfter
      </button>
      <button type="button" onClick={() => editor.chain().focus().deleteRow().run()} disabled={!editor.can().deleteRow()}>
        deleteRow
      </button>
      <button type="button" onClick={() => editor.chain().focus().deleteTable().run()} disabled={!editor.can().deleteTable()}>
        deleteTable
      </button>
      <button type="button" onClick={() => editor.chain().focus().mergeCells().run()} disabled={!editor.can().mergeCells()}>
        mergeCells
      </button>
      <button type="button" onClick={() => editor.chain().focus().splitCell().run()} disabled={!editor.can().splitCell()}>
        splitCell
      </button>
      <button type="button" onClick={() => editor.chain().focus().toggleHeaderColumn().run()} disabled={!editor.can().toggleHeaderColumn()}>
        toggleHeaderColumn
      </button>
      <button type="button" onClick={() => editor.chain().focus().toggleHeaderRow().run()} disabled={!editor.can().toggleHeaderRow()}>
        toggleHeaderRow
      </button>
      <button type="button" onClick={() => editor.chain().focus().toggleHeaderCell().run()} disabled={!editor.can().toggleHeaderCell()}>
        toggleHeaderCell
      </button>
      <button type="button" onClick={() => editor.chain().focus().mergeOrSplit().run()} disabled={!editor.can().mergeOrSplit()}>
        mergeOrSplit
      </button>
      <button type="button" onClick={() => editor.chain().focus().setCellAttribute('backgroundColor', '#FAF594').run()} disabled={!editor.can().setCellAttribute('backgroundColor', '#FAF594')}>
        setCellAttribute
      </button>
      <button type="button" onClick={() => editor.chain().focus().fixTables().run()} disabled={!editor.can().fixTables()}>
        fixTables
      </button>
      <button type="button" onClick={() => editor.chain().focus().goToNextCell().run()} disabled={!editor.can().goToNextCell()}>
        goToNextCell
      </button>
      <button type="button" onClick={() => editor.chain().focus().goToPreviousCell().run()} disabled={!editor.can().goToPreviousCell()}>
        goToPreviousCell
      </button>
    </MenuGroup>
  );
};

export default TableGroup;
