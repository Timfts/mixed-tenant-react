import React from "react"

const Layout = ({ children }) => {
  console.log("Cenoura")
  return (
    <div>
      <header>header</header>
      {children}
    </div>
  );
};

export default Layout;
