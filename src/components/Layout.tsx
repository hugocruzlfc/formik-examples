import React from "react";

export interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className="container">
      <h2 className="title">{title}</h2>
      {children}
    </div>
  );
};

export default Layout;
