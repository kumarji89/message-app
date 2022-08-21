import './App.css';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { Login } from './Login/Login';
import { Contact } from './Contact/Contact';
import { Chat } from './Chat/Chat';
import { Settings } from './Settings/Settings';
import { useEffect, useState } from 'react';

function App() {
  // console.log('window.location.pathname', window.location.pathname, window.location.pathname.split('/')[1].toLocaleLowerCase());

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
    <div className="App">
      <div className='appContainer'>
        <BrowserRouter>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/Chat" element={<Chat />} />
            <Route exact path="/Settings" element={<Settings />} />
            <Route exact path="/" element={<Contact />} />
          </Routes>
          <div className='appNavigation'>
            <ul>
              <li className={activeMenu === 'contactlist' ? 'active' : null}>
                <Link to="/" onClick={()=>{setActiveMenu('contactlist')}}><FontAwesomeIcon icon={faCommentDots} /></Link>
              </li>
              <li className={activeMenu === 'settings' ? 'active' : null}>
                <Link to="/settings" onClick={()=>{setActiveMenu('settings')}}><FontAwesomeIcon icon={faCog} /></Link>
              </li>
            </ul>
          </div>        
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
