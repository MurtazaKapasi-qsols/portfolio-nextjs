"use client";

import Link from 'next/link';
import { handleAnchorClick } from '@/lib/smooth-scroll';

export type NavItem = {
  id: number;
  name: string;
  href: string;
  isParent?: boolean;
  parentId?: number | null;
  className?: string; // Optional for custom styling
};

export const navItems: NavItem[] = [
  { id: 1, name: 'HOME', href: '#header ', isParent: false, parentId: null },
  { id: 2, name: 'Partner', href: '#partners', isParent: false, parentId: null },
  { id: 3, name: 'PORTFOLIO', href: '#portfolio', isParent: false, parentId: null },
  { id: 6, name: 'CONTACT', href: '#contact', isParent: false, parentId: null },
];

type NavigationProps = {
  onLinkClick?: () => void;
  mobile?: boolean;
};

const Navigation = ({ onLinkClick, mobile = false }: NavigationProps) => {
  const topLevelItems = navItems.filter(item => item.parentId === null);

  const renderNavItems = (items: NavItem[]) => {
    return items.map(item => {
      const children = navItems.filter(child => child.parentId === item.id);

      const commonClasses = "uppercase text-white hover:text-gray-300 transition-colors duration-200 px-4 py-2 block text-sm tracking-[3px]";
      const linkClasses = mobile
        ? commonClasses + " cursor-pointer"  // Maybe full width on mobile
        : commonClasses;

      return (
        <li key={item.id} className={`relative group ${mobile ? "mb-2" : ""}`}>
          {item.href.startsWith('#') ? (
            <a
              href={item.href}
              onClick={(e) => {
                handleAnchorClick(e, item.href);
                onLinkClick?.();
              }}
              className={linkClasses}
            >
              {item.name}
            </a>
          ) : (
            <Link
              href={item.href}
              className={linkClasses}
              onClick={onLinkClick}
            >
              {item.name}
            </Link>
          )}

          {children.length > 0 && !mobile && (
            <ul className="absolute left-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
              {renderNavItems(children)}
            </ul>
          )}
        </li>
      );
    });
  };

  return (
    <nav>
      <ul className={`flex ${mobile ? "flex-col" : "space-x-4"}`}>
        {renderNavItems(topLevelItems)}
      </ul>
    </nav>
  );
};

export default Navigation;
