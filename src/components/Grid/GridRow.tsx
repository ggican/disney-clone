import React from "react";

const GridRow = (props: any) => {
  const { children, md, xs, sm, lg, style, className } = props;
  return (
    <div
      style={style}
      className={`${className} 
                col-md-${md} 
                col-sm-${sm} 
                col-lg-${lg}
                col-xs-${xs}`}
    >
      {children}
    </div>
  );
};

export default GridRow;
