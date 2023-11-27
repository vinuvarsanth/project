// ContactPage.js

import React from 'react';

const ContactPage = () => {
  return (
    <div style={styles.container}>
      <h1>Contact Us</h1>
        <br></br> <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
     
      <div style={{fontSize:"25px"}}>
        For any inquiries or assistance, please feel free to contact us using the information below:
        <br>
        </br>
        <br>
        </br>
        <p>Email: info@stockmanager.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 123 Main Street, Cityville, State, 12345</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    textAlign: 'center',
    padding: '20px',
  },

};

export default ContactPage;
