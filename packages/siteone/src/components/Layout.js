import React from "react";
import BaseLayout from "mxtr-shared/components/layouts/BaseLayout";
import styleOverrides from "../global-style-overrides";

const Layout = ({ children }) => {
  return (
    <BaseLayout customGlobal={styleOverrides}>
      <header>header</header>
      {children}
    </BaseLayout>
  );
};

export default Layout;
