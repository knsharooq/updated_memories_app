import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'

const App = () =>{
    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Memories</Typography>
                <img src="http://bit.ly/memories_image" alt="memories" height="160" width="50"/>
            </AppBar>
        </Container>
    );
}

export default App;