import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { ContactDetailModal } from '../Modals/ContactDetailModal';

export const Contact = () => {
  const [data, setData] = useState();
  const [search, setNewSearch] = useState("");
  const [contactModalData, setContactModalData] = useState("");
  const [contactModalOpenState, setContactModalOpenState] = useState(false);

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };
 
  const filtered = !search
    ? data
    : data.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );
  
  const handleContactModal = (contact) => {
    setContactModalData(contact);
    setContactModalOpenState(true);
  };

  const closeModal = (modalState) => {
    setContactModalOpenState(modalState);
  };

  useEffect(()=>{
    axios.get(`./contact.json`).then( contactInfo => {
      setData(contactInfo.data); 
    }).catch(e => { 
      console.log('ERROR: ', e);
    });
  },[]);

  return (
    <>
    <div className='contactPgae'> 
      <h1 className='pageTitle'>Contacts</h1>

      <div className="addContact">
        <span className='addIcon'>+</span>
        <span>Contact</span>
      </div>

      <div className="contactSearch">
        <input type="text" className="contactInput" placeholder='Search Contact' onChange={handleSearchChange} />
        <button className="contactButton"><FontAwesomeIcon icon={faSearch} /></button>
      </div>
      <ul className='contactList'>
        {filtered && filtered.map((contact, i)=>{
          return (
            <li key={contact.id} onClick={()=>handleContactModal(contact)}>
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

    <ContactDetailModal contactData={contactModalData} isOpen={contactModalOpenState} modalState={closeModal} />
    </>
  )
}
