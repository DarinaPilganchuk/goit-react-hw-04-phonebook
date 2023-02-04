import React from 'react'
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className={styles.contacts}>
      <h2 сlassName={styles.phonebook}>Contacts</h2>
      <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button type="button" onClick={() => deleteContact(id)}>
              ⛌
            </button>
          </li>
        );
      })}
    </ul>
    </div>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.array,
  children: PropTypes.object,
  onRemove: PropTypes.func,
};

export default ContactList;
