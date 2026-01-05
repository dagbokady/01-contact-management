
import ContactItem from "../ContactItem/ContactItem.jsx";
import "./ContactList.css"
import {useEffect} from "react";

function ContactList({contactList, onDelete}) {
    useEffect(() => {}, [contactList]);
    if (contactList.length === 0) {
        return <p className="empty-state">Aucun contact trouvé</p>;
    }

    return (
        <div className="contact-list">

            {contactList.map((contact) => (
                <ContactItem
                    key={contact.id}
                    contact={contact}
                    onDelete={onDelete}
                />
            ))}

        </div>
    );
}
export default ContactList