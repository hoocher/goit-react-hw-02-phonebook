import { nanoid } from 'nanoid';
import ContactListItem from './ContactListItem';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem
          key={nanoid()}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
};

export default ContactList;
