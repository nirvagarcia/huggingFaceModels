const styles = {
    container: {
        background: '#202020',
        color: 'white',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'relative',
        height: '100vh',
        width: '100%',
        padding: 0,
        boxSizing: 'border-box'
    }, 
    header: {
        fontSize: '24px',
        color: '#B4B4B4',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    textField: {
        '& .MuiInputBase-input': {
            color: '#fff',
            paddingLeft: '10px',
            paddingBottom: '3px',
        },
        '&::-webkit-scrollbar': {
            width: '8px',
            backgroundColor: 'rgba(0,0,0,0.05)',
        },
        '&::-webkit-scrollbar-thumb': {
            borderRadius: '10px',
            backgroundColor: 'rgba(255,255,255,0.3)',
            border: '2px solid transparent',
            backgroundClip: 'padding-box',
        },
        '&::-webkit-scrollbar-track': {
            borderRadius: '10px',
            boxShadow: 'inset 0 0 5px rgba(0,0,0,0.3)',
        },    
        '& .MuiOutlinedInput-root': {
            backgroundColor: '#2F2F2F',
            borderRadius: '20px',
            '& fieldset': {
                borderColor: 'transparent',
            },
            '&:hover fieldset': {
                borderColor: 'transparent',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'transparent',
            },
        },
        marginBottom: '20px'
    },
    iconButton: {
        color: '#B4B4B4',
        '&:hover': {
            color: 'white',
        }
    },  
    textFieldBox: {
        position: 'absolute',
        bottom: 0,
        width: '90%',
        maxWidth: '60rem',
        padding: '20px',
        left: '50%',
        transform: 'translateX(-50%)'
    },
    menu: {
        '& .MuiPaper-root': {
            backgroundColor: '#333',
            color: 'white',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        },
        '& .MuiMenuItem-root': {
            '&:hover': {
                backgroundColor: '#444',
            }
        },
        '& .Mui-selected': {
            color: 'white',
            backgroundColor: '#555 !important',
        },        
    },
    appBar: {       
        background: 'transparent', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: '10px',
    },
    toolbar: {
        width: '100%', 
        justifyContent: 'space-between'
    },
    logoappbar: {
        flexGrow: 1, 
        color: '#B4B4B4'
    },
    menuItem: {
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        gap: '20px', 
        padding: '10px 20px'
    },
    modelSelection: {
        color: '#D0D0D0', fontSize: '1.25rem' 
    },
    chatBox: {
        width: '75%',
        height: 'calc(80vh - 65px)',    
        overflowY: 'auto',
        padding: '10px',
        backgroundColor: 'transparent',
        borderRadius: '10px',
        marginBottom: '20px',
        '&::-webkit-scrollbar': {
            width: '8px',
            backgroundColor: 'rgba(0,0,0,0.05)',
        },
        '&::-webkit-scrollbar-thumb': {
            borderRadius: '10px',
            backgroundColor: 'rgba(255,255,255,0.3)',
            border: '2px solid transparent',
            backgroundClip: 'padding-box',
        },
        '&::-webkit-scrollbar-track': {
            borderRadius: '10px',
            boxShadow: 'inset 0 0 5px rgba(0,0,0,0.3)',
        }
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#484848',
        padding: '10px',
        borderRadius: '10px',
        marginBottom: '10px',
        maxWidth: '70%',
        minWidth: '1px',
        width: 'fit-content',
        wordWrap: 'break-word',
        marginLeft: 'auto',
        textAlign: 'right',
    },   
    botMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#292929',
        padding: '10px',
        borderRadius: '10px',
        marginBottom: '10px',
        maxWidth: '70%',
        minWidth: '1px',
        width: 'fit-content',
        wordWrap: 'break-word',
    },
};

export default styles;