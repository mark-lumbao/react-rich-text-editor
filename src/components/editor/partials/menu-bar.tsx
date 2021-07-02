import HistoryGroup from './menu-group/history-group';
import CodeblockGroup from './menu-group/codeblock-group';
import HeaingGroup from './menu-group/heading-group';
import MarkupGroup from './menu-group/markup-group';

const MenuBar = () => (
  <div className="editor--menu">
    <HistoryGroup />
    <CodeblockGroup />
    <HeaingGroup />
    <MarkupGroup />
  </div>
);

export default MenuBar;
