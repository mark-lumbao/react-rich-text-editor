import { Fragment, ReactNode } from 'react';

const MenuGroup = ({ children }: { children: ReactNode }) => (
  <Fragment>
    {children}
    <div className="divider" />
  </Fragment>
);

export default MenuGroup;
