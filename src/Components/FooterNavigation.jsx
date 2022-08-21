import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';

export const FooterNavigation = () => {
    
  const [activeMenu, setActiveMenu] = useState('');

  useEffect(()=>{
    if(window.location.pathname === '/'){
      setActiveMenu('contactlist');
    }
    else{
      setActiveMenu(window.location.pathname.split('/')[1].toLocaleLowerCase());
    }
  },[]);

  return (
    <>
    <div className='appNavigation'>
        <ul>
            <li className={activeMenu === 'contactlist' ? 'active' : null}>
            <Link to="/" onClick={()=>{setActiveMenu('contactlist')}}><FontAwesomeIcon icon={faAddressBook} /></Link>
            </li>
            <li className={activeMenu === 'settings' ? 'active' : null}>
            <Link to="/settings" onClick={()=>{setActiveMenu('settings')}}><FontAwesomeIcon icon={faCog} /></Link>
            </li>
        </ul>
    </div>
    </>
  )
}
