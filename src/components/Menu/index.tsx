import React, { useState } from 'react';
import Button from '../button';

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
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="menuContainer">
      <Button onClick={toggleMenu} className="menuToggle" label='Menu'></Button>
      <div className={`menuItems ${isExpanded ? 'expanded' : ''}`}>
        {menuItems.map((item) => (
          <a key={item.label} href={item.link} className="menuItem">
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExpandableMenu;
