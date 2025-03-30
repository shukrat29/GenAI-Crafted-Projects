import React from "react";

const Card = ({
  children,
  className = "",
  padding = "md",
  hover = false,
  ...props
}) => {
  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={`
        bg-white rounded-lg shadow-md
        ${paddings[padding]}
        ${hover ? "hover:shadow-lg transition-shadow duration-200" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
