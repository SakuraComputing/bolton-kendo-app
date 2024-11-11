import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
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

const Menu: React.FC = () => {

  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="app">
      <div className="falling-element">
        <div className='header'>
          <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <FaBars size={30} color={`variables.$primary-color`} />
          </button>
          <h1 className="title">Bolton Kendo Club</h1>
        </div>
        <nav>
          <ul className={`menuContainer ${isOpen ? 'open' : ''}`}>
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

export default Menu;
