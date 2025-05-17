import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="icon"
      href="/tenerife-icon-web.png"
      type="image/png"
      key="favicon"
    />
  ]);
};