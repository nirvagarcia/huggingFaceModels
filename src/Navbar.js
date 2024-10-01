import React, { useState, useEffect, useRef } from 'react';
import { AppBar, Toolbar, Typography, Box, MenuItem, Menu, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styles from './styles';

const models = [
    { id: 2, label: "Llama 3.2 3B", description: "Enhanced performance for complex tasks" },
    { id: 1, label: "Llama 3.2 1B", description: "Ideal for general tasks" },
    { id: 3, label: "Claude V4", description: "Optimized for creative content generation" }
];

function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedModel, setSelectedModel] = useState(models[0]);
    const itemRefs = useRef([]);
    const [maxMenuWidth, setMaxMenuWidth] = useState(0);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelect = (model) => {
        setSelectedModel(model);
        handleClose();
    };

    useEffect(() => {
        if (anchorEl) {
            const timer = setTimeout(() => {
                const widths = itemRefs.current.filter(ref => ref).map(ref => ref.offsetWidth);
                const maxWidth = Math.max(...widths);
                if (maxWidth > maxMenuWidth) {
                    setMaxMenuWidth(maxWidth);
                }
                itemRefs.current.forEach(ref => {
                    if (ref) {
                        ref.style.width = `${maxMenuWidth}px`;
                    }
                });
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [anchorEl, maxMenuWidth]);    

    return (
        <AppBar position="static" sx={styles.appBar}>
            <Toolbar sx={styles.toolbar}>
                <Typography variant="h7" sx={styles.logoappbar}>
                    @nirvagarcia
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h6" color="#B4B4B4" sx={{ marginRight: 1 }}>
                        {selectedModel.label}
                    </Typography>
                    <IconButton onClick={handleClick} color="inherit">
                        <KeyboardArrowDownIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        sx={{ '& .MuiPaper-root': { backgroundColor: '#2F2F2F', color: 'white', borderRadius: '8px', minWidth: `${maxMenuWidth}px` } }}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        {models.map((model, index) => (
                            <MenuItem
                                key={model.id}
                                selected={model.id === selectedModel.id}
                                onClick={() => handleSelect(model)}
                                ref={el => itemRefs.current[index] = el}
                                sx={styles.menuItem}
                            >
                                <Typography variant="body2">
                                    {model.label}
                                    <Typography variant="caption" display="block" sx={{ fontSize: '0.75rem' }}>
                                        {model.description}
                                    </Typography>
                                </Typography>
                                {model.id === selectedModel.id && <CheckCircleIcon sx={styles.modelSelection} />}
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;