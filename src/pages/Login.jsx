import React from 'react';

// Necesitamos el useHistory para Navegar entre rutas
import { useHistory } from 'react-router-dom';

// Vamos a usar el helper MakeStyles de Material UI para personalizar estilos
import { makeStyles } from '@material-ui/core/styles';

// Componentes de Material UI
import { Avatar, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, TextField, Typography, Link, Box } from '@material-ui/core';


// Iconos de Material UI
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

// Componentes Propios
import CopyRight from '../components/CopyRight'; 

// Establecemos los estilos personalizados 
// para los componentes de Material UI a través del tema
const useStyles = makeStyles(theme => ({

    // El contenedor del Formulario de Login
    paper: {
        marginTop: theme.spacing(8), // Poner un espaciado de 8 en el marginTop
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    // Estilos para el formulario
    form: {
        width: '100%',
        marginTop: theme.spacing(2),
    },
    // Estilo para el botón de Submit
    submit: {
        margin: theme.spacing(3,0,2)
    },
    // Estilo para el icono de Login
    avatar: {
        backgroundColor: theme.palette.secondary.main,
        margin: theme.spacing(1)
    }
}))


const Login = () => {

    // Obtener las clases de estilo para aplicarlas a los componentes
    const classes = useStyles();

    // Obtenemos el History para poder navegar entre rutas
    let history = useHistory();

    // Método de Submit del formulario
    const submit = (e) => {
        e.preventDefault();
        history.push({
            pathname: '/dashboard',
            state: {
                token: '123456789'
            }
        })
    }

    return (
        <Container component='main' maxWidth='xs'>
            <CssBaseline />

            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1'>
                    Acceso
                </Typography>
                {/* FIXME: Formulario debería ser con Formik */}
                <form onSubmit={submit} className={classes.form} noValidate>
                    <TextField
                        required
                        fullWidth
                        autoFocus
                        id='email'
                        label='Email'
                        name='email'
                        margin='normal'
                        autoComplete='email'
                        variant='outlined'
                    >
                    </TextField>

                    <TextField
                        required
                        fullWidth
                        autoFocus
                        type='password'
                        id='password'
                        label='Password'
                        name='password'
                        margin='normal'
                        autoComplete='current-password'
                        variant='outlined'
                    ></TextField>

                    {/* Checkbox para recordar los datos del usuario */}
                    <FormControlLabel 
                        control={
                            <Checkbox value='remember' color='secondary' />
                        }
                        label='Recordar datos'
                    />

                    {/* Botón de Submit */}
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={classes.submit}
                    >
                        Acceder
                    </Button>
                    
                    {/* He olvidado la contraseña | registro */}
                    <Grid container>
                        {/* Olvido Contraseña */}
                        <Grid item xs={12} sm={6}>
                           <Link href='#' variant='body2'>
                               {'He olvidado mi contraseña'}
                           </Link>
                        </Grid>
                        {/* Registro */}
                        <Grid item xs={12} sm={6}>
                            <Link href='#' variant='body2'>
                               {'No tengo cuenta'}
                           </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            {/* Añadimos el Copy de nuestra empresa */}
            <Box mt={8}>
                <CopyRight />
            </Box>
        </Container>
    );
}


export default Login;
