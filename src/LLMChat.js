import React, { useState, useEffect } from 'react';
import { Box, TextField, Typography, InputAdornment, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './styles';
import { sendMessageToModel } from './API Models/api';

function LLMChat({ selectedModel }) {
    const [query, setQuery] = useState('');
    const [chatLog, setChatLog] = useState([]);
    const handleInputChange = (event) => { setQuery(event.target.value) };
   
    const handleSubmit = async () => {
        if (!query.trim()) return;
        const userMessage = { type: 'user', message: query };
        setChatLog([...chatLog, userMessage]);
        setQuery('');

        const generatedText = await sendMessageToModel(query);
        const botMessage = { type: 'bot', message: generatedText };
        setChatLog(prevChat => [...prevChat, botMessage]);
    };

    const handleClearChat = () => {
        setChatLog([]);
        localStorage.removeItem('chatLog');
    };

    useEffect(() => {
        const savedChat = localStorage.getItem('chatLog');
        if (savedChat) {
            setChatLog(JSON.parse(savedChat));
        }
    }, []);

    useEffect(() => { localStorage.setItem('chatLog', JSON.stringify(chatLog)) }, [chatLog]);

    return (
        <Box sx={styles.container}>
            <Typography sx={styles.header}>
                {chatLog.length === 0 ? 'Ask a Question' : ''}
            </Typography>
            
            <Box sx={styles.chatBox}>
                {chatLog.map((log, index) => (
                    <Typography
                        key={index}
                        sx={log.type === 'user' ? styles.userMessage : styles.botMessage}
                    >
                        {log.message}
                    </Typography>
                ))}
            </Box>
            
            <Box sx={styles.textFieldBox}>
                <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="Send a message..."
                    value={query}
                    onChange={handleInputChange}
                    multiline
                    minRows={1}
                    maxRows={4}
                    sx={{ ...styles.textField }}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter' && event.shiftKey) {
                            event.stopPropagation();
                        } else if (event.key === 'Enter' && !event.shiftKey) {
                            event.preventDefault();
                            handleSubmit();
                        }
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment sx={{ alignItems: 'center', height: '100%' }}>
                                <IconButton
                                    color="inherit"
                                    onClick={handleClearChat}
                                    disabled={!chatLog.length > 0}
                                    sx={styles.iconButton}
                                >
                                    <DeleteIcon />
                                </IconButton> 
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
                        style: { alignItems: 'flex-end' }
                    }}
                />
            </Box>           
        </Box>
    );
}

export default LLMChat;