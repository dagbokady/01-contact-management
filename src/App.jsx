import * as React from 'react';
import NavBar from "./components/Navbar/NavBar.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import "./App.css"
import { useState} from "react";
import contacts from "./data/contacts.js";

function App() {
    const [contactList, setContactList] = useState([...contacts]);

    const handleDelete = (id) => {
        setContactList(prev =>
            prev.filter(contact => contact.id !== id)
        );
    };

    return (
        <div className="app">
            <NavBar />

            <div className="main-container">
                <ContactForm
                    contactList={contactList}
                    setContactList={setContactList}
                />

                <ContactList
                    contactList={contactList}
                    onDelete={handleDelete}
                />
            </div>
        </div>
    );
}
export default App;