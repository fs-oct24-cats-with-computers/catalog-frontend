import './ContactsPage.scss';
import React from 'react';
import { ContactCard } from '../../components/ContactCard/ContactCard';
import { Contact } from '../../types/Contact';

interface Props {
  contacts: Contact[];
}

export const ContactsPage: React.FC<Props> = ({ contacts }) => {
  return (
    <div className="contact-page container">
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          photo={contact.photo}
          name={contact.name}
          githubLink={contact.githubLink}
          telegramLink={contact.telegramLink}
        />
      ))}
    </div>
  );
};
