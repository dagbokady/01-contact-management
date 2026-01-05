import "./ContactItem.css"
function ContactItem({contact, onDelete }) {

    return (
        <div className="contact-item">
            <img
                src={contact.photo}
                alt={contact.name}
                className="contact-avatar"
            />

            <div className="contact-info">
                <h3>{contact.name}</h3>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>

                <span className={`badge badge-${contact.category.toLowerCase()}`}>
          {contact.category}
        </span>
            </div>

            <button
                className="btn-delete"
                onClick={() => {
                    if (confirm("Supprimer ce contact ?")) {
                        onDelete(contact.id);
                    }
                }}

            >
                Supprimer
            </button>
        </div>
    );
}
export default ContactItem;