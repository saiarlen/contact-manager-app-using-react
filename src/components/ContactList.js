import React from "react";
import ContactCard from "./ContactCard";

class ContactList extends React.Component {
  
  
  render() {
        const renderContactList = this.props.contacts.map((contact) => {
          return <ContactCard contact ={contact}/>;
            
        });
    return (
      <div className="container mt-5">
        <div className="row">{ renderContactList }</div>
      </div>
    );
  }
}

export default ContactList;
