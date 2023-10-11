import Link from "next/link";
import React from "react";

const Sidebar = ({open}) => {
  return (
    <div className={open ? ` lg:block w-96 bg-teal-600 flex-col h-[95vh] relative`:"w-0"}>
      <Link href="/settings">Settings</Link>
      <Link href="/blog">Blog</Link>
    </div>
  );
};

export default Sidebar;
