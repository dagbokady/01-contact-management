import "./ContactForm.css";
import { useState } from "react";

function ContactForm({ contactList = [], setContactList }) {

    const categories = [
        ...new Set(contactList.map(c => c.category).filter(Boolean))
    ];

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        category: "",
        photo: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.phone || !form.category) return;

        setContactList(prevContacts => [
            ...prevContacts,
            {
                ...form,
                id: Date.now(),
                photo: form.photo || "https://i.pravatar.cc/150",
            }
        ].reverse());

        // reset form
        setForm({
            name: "",
            email: "",
            phone: "",
            category: "",
            photo: "",
        });
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Ajouter un contact</h2>

            <input
                type="text"
                name="name"
                placeholder="Nom complet"
                value={form.name}
                onChange={handleChange}
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
            />

            <input
                type="tel"
                name="phone"
                placeholder="Téléphone"
                value={form.phone}
                onChange={handleChange}
            />

            <select
                name="category"
                value={form.category}
                onChange={handleChange}
            >
                <option value="">Sélectionner une catégorie</option>
                {categories.map((cat, index) => (
                    <option key={index} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>

            <input
                type="text"
                name="photo"
                placeholder="URL de la photo (optionnel)"
                value={form.photo}
                onChange={handleChange}
            />

            <button type="submit" className="btn-primary">
                Ajouter le contact
            </button>
        </form>
    );
}

export default ContactForm;
