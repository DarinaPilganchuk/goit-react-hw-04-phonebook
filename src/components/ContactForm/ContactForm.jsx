import  React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';


  export const ContactForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    
   const handleChangeForm = event => {
        console.log(event.target.value, event.target.name);
        const { name, value } = event.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                break;
        }
    };

    const handleFormSubmit = e => {
        e.preventDefault()
        onSubmit(name, number);
        setName('');
        setNumber('');
    };
    
    return (
        <div className={styles.phonebook}>
            <h1 className={styles.phonebook}>Phonebook</h1>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder='Enter name'
                    value={name}
                    onChange={handleChangeForm}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <br />
                <label htmlFor="number">Number</label>
                <input
                    type="tel"
                    id="number"
                    name="number"
                    placeholder='Enter phone number'
                    value={number}
                    onChange={handleChangeForm}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                <button
                    type='submit'
                    onClick={() => { }}>Add contact</button>
                <br />
            </form>
        </div>
    )
};


ContactForm.prototypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  onSubmit: PropTypes.func,
};

    