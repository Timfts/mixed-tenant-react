import React from "react";
import { Global, css } from "@emotion/react";

const BaseLayout = ({ children, customGlobal = css`` }) => {
  return (
    <div>
      <Global
        styles={[
          css`
            *,
            *::before,
            *::after {
              box-sizing: inherit;
              margin: 0;
              padding: 0;
            }

            body {
              box-sizing: border-box;
              color: red;
            }
          `,
          customGlobal,
        ]}
      />
      <p>base</p>
      {children}
    </div>
  );
};

export default BaseLayout;
