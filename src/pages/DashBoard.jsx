import React, {useState} from 'react';
import CopyRight from '../components/CopyRight';

// Importaremos clsx para trabajar con las clases
import clsx from 'clsx';

// MakeStyles y CassBaseLine --> Estilos con Material UI y el tema (theme) por defecto
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useHistory } from 'react-router-dom';

// Componentes de Material UI
import { AppBar, IconButton, Toolbar, Typography, Badge, 
    Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, 
    Container, Grid, Paper } from '@material-ui/core';

// Iconos de Material UI
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

// Home ICON
import HomeIcon from '@material-ui/icons/Home';


// Componentes Propios


// Definición de estilos

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({

    root: {
        display: 'flex'
    },
    // Toolbar del menú lateral (Drawer)
    toolbar: {
        paddingRight: 24
    },
    // Iconos del Toolbar
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        // Añadimos todos los estilos de Toolbar por defecto
        ...theme.mixins.toolbar
    },
    // AppBar --> Barra de Navegación para desaparecer de la  pantalla
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    // AppBar --> Barra de Navegación para aparecer en pantalla
    appBarShift: {
        marginLeft: drawerWidth, // El ancho del Drawer
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    // Separación entre elementos del AppBar
    appBarSpacer: theme.mixins.toolbar,
    // Botones del menú (Drawer)
    menuButton: {
        marginRight: 35,
    },
    // Botones del menú (Drawer) cuando el menú esté plegado
    menuButtonHidden: {
        display: 'none',
    },
    // Titulo de las opciones del menú
    title: {
        flexGrow: 1,
    },
    // Menu (Drawer) Abierto
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
        whiteSpace: 'nowrap',
        transition: theme.transitions.create(['width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerPaperClosed: {
        overflowX: 'hidden',
        width: theme.spacing(7),
        transition: theme.transitions.create(['width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        }
    },
    // Paper del componente
    paper: {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
        padding: theme.spacing(2),
    },
    // Altura fija
    fixedHeight: {
        height: 240
    },
    // Estilos para los contenidos del DashBoard
    content: {
        flexGrow: 1,
        overflow: 'auto',
        height: '100vh'
    },
    // Container del Dashboard
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    }
})
)


const DashBoard = () => {

    // Clases para aplicar a los elementos
    const classes = useStyles();

    // History para manejarnos con las rutas y poder navegar
    let history = useHistory()

    // Un estado que controle si se muestra el menú o no
    const [open, setOpen] = useState(true)

    // Definimos la altura fija del Paper
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

    // Método para controlar la Apertura del Drawer
    const handleDrawerOpen = () => {
        setOpen(true)
    }

    // Método para controlar el Cierre del Drawer
    const handleDrawerClose = () => {
        setOpen(false)
    }

    // Método para realizar un Logout y navegar a Login
    const logout = () => {
        history.push('/login')
    }


    return (
        <div className={classes.root}>
            <CssBaseline />
            {/* Barra de Navegación Superior */}
            <AppBar 
                className={ clsx(classes.appBar, open && classes.appBarShift) }
                position='absolute'
            >   
                <Toolbar className= { classes.toolbar }>

                    {/* Icono para abrir el Drawer */}
                    <IconButton
                        className= { clsx(classes.menuButton, open && classes.menuButtonHidden) }
                        edge = 'start'
                        color='inherit'
                        aria-label='open drawer'
                        onClick = {handleDrawerOpen}
                    >
                        {/* Icono de Hamburger para plegar y desplegar */}
                        <MenuIcon />
                    </IconButton>
                    {/* Nombre de la aplicación / empresa */}
                    <Typography 
                        component='h1' 
                        variant='h6' 
                        color='inherit' 
                        className={classes.title}
                        noWrap
                    >
                        Imagina ReactJS Dashboard
                    </Typography>
                    {/* Sección de Notificaciones para el Usuario */}
                    <IconButton color='inherit'>
                        <Badge color='secondary' badgeContent={10}>
                            <NotificationIcon />
                        </Badge>
                    </IconButton>
                    {/* Botón para Logout */}
                    <IconButton color='inherit' onClick={logout}>
                            <ExitToAppIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            {/* Drawer */}
            <Drawer
                open={ open }
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClosed)
                }}
            >
                <div className={ classes.toolbarIcon }>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                {/* Divider para separar los elementos del menú */}
                <Divider />
                {/* Listado de elementos de navgación del menú */}
                <List>
                    {/* TODO: Añadir los enlaces del menú Principal */}
                    <ListItem>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary='Home' />
                    </ListItem>
                </List>
                {/* Divider para separar los elementos del menú */}
                <Divider />
                {/* Listado de elementos de navegación del menú de Settings*/}
                <List>
                    {/* TODO: Añadir los enlaces del menú */}
                    <ListItem>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary='Settings' />
                    </ListItem>
                </List>
            </Drawer>

            {/* El contenido del Dashboard */}
            <main className={classes.content}>
                {/* Separamos el contenido del App Bar para poder verlo */}
                <div className={ classes.appBarSpacer }>
                    {/* Creamos el Container */}
                    <Container className={classes.container} maxWidth='lg'>
                        {/* Aquí vendrán nuestros componentes o Switch de rutas que toque */}
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4} lg={9}>
                                <Paper className={ fixedHeightPaper }>
                                    {/* TODO: Crear un componente que reciba props.children */}
                                    <Typography>Primera caja</Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={4} lg={3}>
                                <Paper className={ fixedHeightPaper }>
                                    <Typography>Segunda caja</Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={ fixedHeightPaper }>
                                    <Typography>Tercera caja</Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </main>
        </div>
    );
}

export default DashBoard;
