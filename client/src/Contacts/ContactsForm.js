import React from "react";

import {ContactsFormController} from "./ContactsFormController";
import {SubmitForm} from "./SubmitForm"; //otra funcion hay que importarlo

const ContactsForms = ({contact, updateContact, getContacts}) => {
    const {state, updateField} = ContactsFormController();

    //cambiar return, cambiar onchange
    return (
        <form onSubmit={SubmitForm}>
            <div>
                <label className="form-label">Name: </label>
                <input className="form-control" type="text" name="name" value={contact.name} required
                       onChange={updateField}/>
            </div>
            <div>
                <label className="form-label">Lastname: </label>
                <input className="form-control" type="text" name="lastname" value={contact.lastname}
                       required onChange={updateField}/>
            </div>
            <div>
                <label className="form-label">Company: </label>
                <input className="form-control" type="text" name="company" value={contact.company}
                       onChange={updateField}/>
            </div>
            <div>
                <label className="form-label">Phone: </label>
                <input className="form-control" type="text" name="phone" value={contact.phone}
                       onChange={updateField}/>
            </div>
            <div>
                <label className="form-label">Email: </label>
                <input className="form-control" type="email" name="email" value={contact.email} required
                       onChange={updateField}/>
            </div>
            <div>
                <input className="btn btn-primary m-1" type="submit" value="Submit"/>
                {
                    contact._id ?
                        <button className="btn btn-warning m-1" onClick={updateField}>Reset</button> : null
                }
            </div>
            {
                state.message ?
                    <div className="badge badge-light m-4">{state.message}</div> : null
            }

        </form>
    )
}

export default ContactsForms;