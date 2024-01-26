import React from "react";

const AppWrap = (Component, idName) =>
  function HOC() {
    return (
      <div id={idName}>
        <Component />
      </div>
    );
  };

export default AppWrap;
