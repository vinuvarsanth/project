// AboutPage.js

import React from 'react';

const AboutPage = () => {
  return (
    <div style={styles.container}>
      <h1>About Stock Manager</h1>
      <br></br> <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <p style={{fontSize:"24px"}} >
        Welcome to Stock Manager, your go-to solution for efficiently managing stocks and inventory.
        Our platform provides a user-friendly interface to help you keep track of your stock levels,
        monitor product movements, and streamline your inventory management process.
        <br>
        </br>
        <br>
        </br>
      </p>
      <p style={{fontSize:"24px"}} >
        Whether you are a small business or a large enterprise, Stock Manager is designed to meet your
        specific needs. Take control of your stock, reduce losses, and enhance your overall business
        efficiency with our powerful stock management tools.
        <br>
        </br>
        <br>
        </br>
      </p>
      <p style={{fontSize:"24px"}} >
        Thank you for choosing Stock Manager. If you have any questions or feedback, feel free to
        contact our support team at support@stockmanager.com.
        <br>
        </br>
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto', // Center the container horizontally
    textAlign: 'center',
    padding: '20px',
  },
};

export default AboutPage;
