import {useEffect, useState} from "react";

const emptyState = {
    name: "", lastname: "", company: "", phone: "", email: "",message: ""
}

export function ContactsFormController(){
    const [state,setState]=useState(emptyState);
    const updateField =(event)=>{
        debugger
        const value = event.target.value
        const name = event.target.name
        setState({...state,[name]:value})
    }
    return {state,updateField};
}