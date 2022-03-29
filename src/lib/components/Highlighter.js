import React from 'react';

const Highlighter = ({ children }) => {
  return (
    <div className="hoverHighlight">
      {children}
      <style jsx="true">
        {`
          .hoverHighlight {
            border: 2px dashed transparent;
            transition-duration: 1s;
          }
          .hoverHighlight:hover {
            border: 2px dashed red;
          }
        `}
      </style>
    </div>
  );
};

export default Highlighter;
