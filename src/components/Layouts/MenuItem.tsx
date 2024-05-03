'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuItemProps {
    label: string;
    link: string;
    disabled?: boolean;
    submenu?: { label: string; link: string }[];
}

const MenuItem: React.FC<MenuItemProps> = ({
    label,
    link,
    submenu,
    disabled
}) => {
    const pathname = usePathname();
    if (submenu) {
        return (
            <li className="nav-item" key={label}>
                <Link
                    href={link}
                    className="nav-link"
                    onClick={(e) => e.preventDefault()}
                >
                    {label} <i className="fa-solid fa-angle-down"></i>
                </Link>

                <ul className="dropdown-menu">
                    {submenu.map((subItem) => {
                        const isActive = pathname == subItem.link;
                        return (
                            <li className="nav-item" key={subItem.label}>
                                <Link
                                    href={subItem.link}
                                    className={`nav-link ${
                                        isActive ? 'active' : ''
                                    }`}
                                >
                                    {subItem.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </li>
        );
    }

    return (
        <li className="nav-item" key={label}>
            <Link
                href={link}
                className={`nav-link ${
                    pathname.includes(link) && link != '/'
                        ? 'nav-bar-item'
                        : link == '/' && pathname == '/'
                        ? 'nav-bar-item'
                        : ''
                } ${!!disabled ? 'disabled' : ''}`}
            >
                {label}
            </Link>
        </li>
    );
};

export default MenuItem;
