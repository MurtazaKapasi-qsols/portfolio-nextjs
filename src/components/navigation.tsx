"use client";

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



import Link from 'next/link';
import { handleAnchorClick } from '@/lib/smooth-scroll';

const Navigation = () => {
  const topLevelItems = navItems.filter(item => item.parentId === null);

  const renderNavItems = (items: NavItem[]) => {
    return items.map(item => {
      const children = navItems.filter(child => child.parentId === item.id);
      
      return (
        <li key={item.id} className="relative group">
          {item.href.startsWith('#') ? (
            <a
              href={item.href}
              onClick={(e) => handleAnchorClick(e, item.href)}
              className="uppercase text-white hover:text-gray-300 transition-colors duration-200 px-4 py-2 block text-sm tracking-[3px] cursor-pointer"
            >
              {item.name}
            </a>
          ) : (
            <Link
              href={item.href}
              className="uppercase text-white hover:text-gray-300 transition-colors duration-200 px-4 py-2 block text-sm tracking-[3px]"
            >
              {item.name}
            </Link>
          )}
          
          {/* Render submenu if isParent is true */}
          {children.length > 0 && (
            <ul className="absolute left-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
              {renderNavItems(children)}
            </ul>
          )}
        </li>
      );
    });
  };

  return (
    <nav >
      <ul className="flex space-x-4">
        {renderNavItems(topLevelItems)}
      </ul>
    </nav>
  );
};

export default Navigation;