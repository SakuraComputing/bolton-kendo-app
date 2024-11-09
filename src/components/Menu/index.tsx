import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/_menu.scss';

interface MenuItem {
  label: string;
  link: string;
}

const menuItems: MenuItem[] = [
  { label: 'Practice Times', link: '/practice-times' },
  { label: 'About Club', link: '/about-club' },
  { label: 'Reading', link: '/reading' },
  { label: 'History of the Club', link: '/history' },
  { label: 'What is Kendo', link: '/what-is-kendo' },
];

const ExpandableMenu: React.FC = () => {
  return (
    <div className="app">
      <div className="falling-element">
        <h1 className="title">Bolton Kendo Club</h1>
        <nav>
          <ul className="menuContainer">
            <li className="menuItems">
              {menuItems.map((item) => (
                <Link key={item.label} to={item.link} className="menuItem">
                  {item.label}
                </Link>
              ))}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ExpandableMenu;
