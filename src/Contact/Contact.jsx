import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
  const [data, setData] = useState();
  const [search, setNewSearch] = useState("");

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };
 
  const filtered = !search
    ? data
    : data.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );  

  useEffect(()=>{
    axios.get(`./contact.json`).then( contactInfo => {
      setData(contactInfo.data); 
    }).catch(e => { 
      console.log('ERROR: ', e);
    });
  },[]);

  return (
    <>
    <div> 
      <h1 className='pageTitle'>Contacts</h1>
      <div className="contactSearch">
        <input type="text" className="contactInput" placeholder='Search Contact' onChange={handleSearchChange} />
        <button className="contactButton"><FontAwesomeIcon icon={faSearch} /></button>
      </div>
      <ul className='contactList'>
        {filtered && filtered.map((contact, i)=>{
          return (
            <li key={contact.id}>
              <div>
                {contact.name}
              </div>
              <small>
              {contact.number}
              </small>
              
              <div className="arrow"><FontAwesomeIcon icon={faAngleRight} /></div>
            </li>
          )
        })}
      </ul>
    </div>
    </>
  )
}
