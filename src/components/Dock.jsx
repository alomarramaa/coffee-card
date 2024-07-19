import React from 'react';
import { Link } from 'react-router-dom';
import './Dock.css';

const Dock = () => {
  const items = [
    // Add your icon URLs or images here
    { id: 1, name: '', icon: '/appIcons/hot-coffee.png', path: '/drinks'  },
    { id: 2, name: '', icon: '/appIcons/iced-coffee.png', path: '/drinks'  },
    { id: 3, name: '', icon: '/appIcons/syrup.png',  path: '/syrups'  },
    // Add more items as needed
  ];

  return (
    <div className="dock">
      {items.map((item) => (
        <Link key={item.id} to={item.path} className="dock-item">
          <img src={item.icon} alt={item.name} className="dock-icon" />
        </Link>
      ))}
    </div>
  );
};
export default Dock;
