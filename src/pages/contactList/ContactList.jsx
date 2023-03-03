import styles from './ContactList.module.css'

function ContactList(props) {
  return (
    <>
      <h1>Contact List</h1>
      <div className={styles.container}>
        {props.contacts.map(contact => (
          <div key={contact._id}>
            <p>Contact Name: {contact.name}</p>
            <p>Email: {contact.email}</p>
            <p>Social: {contact.social}</p>
            <p>Notes <br/> {contact.notes}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default ContactList