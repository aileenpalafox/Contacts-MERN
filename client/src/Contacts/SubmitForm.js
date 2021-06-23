import {useEffect, useState} from "react";

const emptyState = {
    name: "", lastname: "", company: "", phone: "", email: "", message: ""
}

export function SubmitForm(event) {
    event.preventDefault()
    //const [state, setState] = useState(emptyState);

    const updateContact = () => {
        fetch('http://localhost:4000/' + this.props.contact._id, {
            method: "put", headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then(({message}) => {
                this.setState({message})
                this.props.getContacts()
                this.resetForm()
            })
    }
    const newContact = () => {
        fetch('http://localhost:4000/', {
            method: "post", headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then(({message}) => {
                this.setState({message})
                this.props.getContacts()
                this.resetForm()
            })
    }

    const {name, lastname, company, phone, email} = this.props.contact
    const data = {
        name, lastname, company, email
    }
    if (phone) {
        data.phone = phone
    }
    //if has id, it exists, then update contact information
    if (this.props.contact._id) {
        updateContact();
        //if not then create new contact
    } else {
        newContact();
    }

}