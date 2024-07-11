"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

interface SideNavLinkProps {
  href: string;
  name: string;
  Icon: IconType;
}

const SideNavLink: React.FC<SideNavLinkProps> = ({ href, name, Icon }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center space-x-2 py-2 px-4 rounded-lg ${
        isActive ? "bg-gray-700 text-white" : "text-gray-400"
      } hover:bg-gray-600 hover:text-white transition-colors duration-200`}
    >
      <Icon />
      <span>{name}</span>
    </Link>
  );
};

export default SideNavLink;
