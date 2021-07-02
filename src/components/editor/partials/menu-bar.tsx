import HistoryGroup from './menu-group/history-group';
import CodeblockGroup from './menu-group/codeblock-group';
import HeaingGroup from './menu-group/heading-group';
import MarkupGroup from './menu-group/markup-group';
import MarkGroup from './menu-group/mark-group';

const MenuBar = () => (
  <div className="editor--menu">
    <HeaingGroup />
    <MarkGroup />
    <HistoryGroup />
    <CodeblockGroup />
    <MarkupGroup />
  </div>
);

export default MenuBar;
