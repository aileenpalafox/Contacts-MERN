import React from 'react';

const Contact = ({contact, updateContact}) => {
    return (
        <div className="card w-50 p-3">
            <ul>
                <li>{contact.name}</li>
                <li>{contact.lastname}</li>
                <li>{contact.company}</li>
                <li>{contact.phone}</li>
                <li>{contact.email}</li>
            </ul>
            <div className="btn-group">
                <button className="btn btn-success" onClick={() => {
                    updateContact(contact)
                }}>Edit
                </button>
                {/*<DeleteButton getContacts={getContacts} id={contact._id}/>*/}
            </div>

        </div>
    )
};

const ContactList = ({contacts, updateContact, getContacts}) => {
    return (
        <div className="d-flex flex-wrap justify-content-between">
            {contacts.map((contact, index) =>
                <Contact contact={contact} key={index} updateContact={updateContact}
                         getContacts={getContacts}/>)}
        </div>
    )
};

export default ContactList;