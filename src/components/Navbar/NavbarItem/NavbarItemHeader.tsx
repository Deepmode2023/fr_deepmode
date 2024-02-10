import React from "react";

type HeaderType = {
  title: string;
  Icon: React.ReactNode;
};

export const Header = ({ title, Icon }: HeaderType) => {
  return (
    <div className="flex gap-[10px] items-center relative">
      {Icon}
      {title}
    </div>
  );
};
