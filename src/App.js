import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Login } from './Login/Login';
import { Contact } from './Contact/Contact';
import { Chat } from './Chat/Chat';
import { Settings } from './Settings/Settings';
import { FooterNavigation } from './Components/FooterNavigation';

function App() {
  return (
    <div className="App">
      <div className='appContainer'>
        <BrowserRouter>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/Chat" element={<Chat />} />
            <Route exact path="/Settings" element={<Settings />} />
            <Route exact path="./" element={<Contact />} />
          </Routes>

          <FooterNavigation />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
