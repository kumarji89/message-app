import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

export const ContactDetailModal = (props) => {
  return (
    <>
      <div className={props.isOpen === true ? 'contactDetailModal showModal' : 'contactDetailModal hideModal'}>
        <div className="modalClose" onClick={()=> props.modalState(false)}>+</div>
        <div className="contactNameNumber">
          <div className="contactName">{props.contactData.name}</div>
          <div className="contactNumber">{props.contactData.number}</div>
        </div>
        <div className="contactActions">
          <ul>
            <li><FontAwesomeIcon icon={faCommentDots} /></li>
            <li><FontAwesomeIcon icon={faPenToSquare} /></li>
            <li><FontAwesomeIcon icon={faTrashCan} /></li>
          </ul>
        </div>
      </div>
    </>
  )
}
