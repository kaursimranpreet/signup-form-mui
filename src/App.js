import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Fab } from '@mui/material';
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function SignUpForm() {
    const [isDarkModeOn, setIsDarkModeOn] = React.useState(false);

    const theme = React.useMemo(
        () => createTheme({
            palette: {
                mode: isDarkModeOn === true ? 'dark' : 'light',
                primary: {
                    main: '#51513d',
                },
            },
        })
        , [isDarkModeOn])

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        alert(JSON.stringify({
            username: data.get('username'),
            password: data.get('password'),
            email: data.get('email'),
            phone: data.get('phone'),
            dob: data.get('date')
        }));
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        // backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[500] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Box 
                            sx={{
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                width: '100%', alignItems: 'center'
                            }}
                        >
                            <Typography component="h1" variant="h5">
                                Sign Up
                            </Typography>
                            <Fab color="primary" aria-label="add" onClick={() => setIsDarkModeOn(!isDarkModeOn)}>
                                <Brightness4Icon />
                            </Fab>
                        </Box>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="email"
                                label="Email Address"
                                type="email"
                                id="email"
                                autoComplete="email"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="phone"
                                label="Phone Number"
                                type="phone"
                                id="phone"
                                autoComplete="phone"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="date"
                                label="Date of Birth"
                                type="date"
                                id="date"
                                autoComplete="date"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}