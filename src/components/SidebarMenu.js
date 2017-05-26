import React from 'react';
import Profile from './../assets/boy.svg';
import Experience from './../assets/lecture.svg';
import Contact from './../assets/smartphone.svg';

export default ({ height }) => {
  return (
    <nav className="menu-wrapper" style={{height}}>
      <ul className="sidebar-menu">
        <li>
          <a>
            <img src={Profile} height="50" width="60" alt="Profile"/>
            Profile
          </a>
        </li>
        <li>
          <a>
            <img src={Experience} height="50" width="60" alt="Experience"/>
            Experience
          </a>
        </li>
        <li>
          <a>
            <img src={Contact} height="50" width="60" alt="Contact"/>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
