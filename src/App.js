import React from 'react';
import Box from '@mui/material/Box';
import styles from './styles';
import LLMChat from './LLMChat';
import Navbar from './Navbar';

function App() {
  return (
    <Box sx={styles.container}>
      <Navbar />
      <LLMChat />
    </Box>
  );
}

export default App;