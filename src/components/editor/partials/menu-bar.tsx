import { lazy, Suspense } from 'react';

const HistoryGroup = lazy(() => import('./menu-group/history-group'));
const CodeblockGroup = lazy(() => import('./menu-group/codeblock-group'));
const HeaingGroup = lazy(() => import('./menu-group/heading-group'));
const MarkupGroup = lazy(() => import('./menu-group/markup-group'));
const MarkGroup = lazy(() => import('./menu-group/mark-group'));
const TableGroup = lazy(() => import('./menu-group/table-group'));
const TasklistGroup = lazy(() => import('./menu-group/tasklist-group'));

const MenuBar = () => (
  <Suspense fallback={<span>Loading menu items</span>}>
    <div className="editor--menu">
      <HeaingGroup />
      <MarkGroup />
      <HistoryGroup />
      <CodeblockGroup />
      <MarkupGroup />
      <TableGroup />
      <TasklistGroup />
    </div>
  </Suspense>
);

export default MenuBar;
