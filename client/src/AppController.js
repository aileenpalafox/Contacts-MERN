//dar comportamiento a funciones y regresarlas
import {useEffect, useState} from "react";

const emptyState = {
    message: "", contacts: [], skip: 0, limit: 10,
}

//debe ir en mayuscula
export function AppController() {
    const [state, setState] = useState(emptyState);
    useEffect(() => {
        getContacts();
    }, [state, setState])
    const getContacts = () => {
        fetch(`http://localhost:4000/contacts?limit=10&skip=${state.skip}`)
            .then((response) => response.json())
            .then((contacts) => setState({contacts}))
    }
    const changeContact = (contact) => {
        setState(contact)
    }
    return {state, getContacts, changeContact}
}
