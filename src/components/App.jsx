import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
  };

  inputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handlerButton = event => {
    event.preventDefault();
    const cont = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    const contacts = [...this.state.contacts, cont];
    this.setState({ contacts: contacts });
    this.setState({ name: '' });
    this.setState({ number: '' });
  };

  filter = filterQuery => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.title.includes(filterQuery)),
    }));
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handlerButton}>
          <span>Name </span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.inputChange}
          />
          <span>Number </span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.inputChange}
          />
          <button type="submit">Add contacts</button>
        </form>
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
export default App;
