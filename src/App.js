import React, { useState } from 'react';
import Box from '@mui/material/Box';
import styles from './styles';
import LLMChat from './LLMChat';
import Navbar from './Navbar';

function App() {
    const [selectedModel, setSelectedModel] = useState(null);
    return (
        <Box sx={styles.container}>
            <Navbar setSelectedModel={setSelectedModel} />
            <LLMChat selectedModel={selectedModel} />
        </Box>
    );
}

export default App;