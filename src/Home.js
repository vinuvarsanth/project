import { Box, Button, Container, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { userContext } from './Context';
import './home.css';



const Home = () => {
  const [user, setuser] = useContext(userContext);
  return (
    <div className='cont'>
      {/* App Bar */}
      <header className="header">
        <h3>Stock Manager</h3>
        <nav className="navbar">
          <a href="#">Home</a>
          <a href="about">About</a>
          
          <a href="contact">Contact</a>
          <a href="signin">Login</a>
        </nav>
      </header>

      {/* Main Content */}
      <Container >
        <Box sx={{ height: '85vh',  display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <div>
            <Typography variant="h2" component="h1" gutterBottom className="co">
              Welcome to STOCK MANAGER
            </Typography>
    
            <Typography variant="h5" component="p" gutterBottom>
                
            </Typography>
            <Button variant="contained" color="primary" size="large" sx={{ marginTop: 4 }}>
          <a href='ProductTable' style={{color:'white'}}>click here</a>
            </Button>

          </div>
        </Box>
      </Container>

      {/* Footer */}
      <div className='footar'>
        <h4>{user}</h4>
        <h3  className="helo" style={{marginLeft:'85vw', color:'smokedwhite'}}>Copyrights</h3>
      </div>

    </div>
  );
};

export default Home;