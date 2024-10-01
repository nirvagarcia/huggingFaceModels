import React, { useState } from 'react';
import { Box, TextField, Typography, InputAdornment, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import styles from './styles';

function LLMChat() {
    const [query, setQuery] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = () => {
        console.log('Submit:', query);
        setSubmitted(true);
    };

    return (
        <Box sx={styles.container}>
            {!submitted && (
                <Typography sx={styles.header}>
                    Ask a Question
                </Typography>
            )}
            <Box sx={styles.textFieldBox}>
                <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="Send a message..."
                    value={query}
                    onChange={handleInputChange}
                    sx={styles.textField}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    color="inherit"
                                    onClick={handleSubmit}
                                    disabled={!query}
                                    sx={styles.iconButton}
                                >
                                    <SendIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
        </Box>
    );
}

export default LLMChat;