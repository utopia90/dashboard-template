import React, {useState} from 'react';
import CopyRight from '../components/CopyRight';

// Importaremos clsx para trabajar con las clases
import clsx from 'clsx';

// MakeStyles y CassBaseLine --> Estilos con Material UI y el tema (theme) por defecto
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useHistory } from 'react-router-dom';

// Componentes de Material UI

// Iconos de Material UI

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
        <div>
            <h1>Dashboard Page</h1>
            <CopyRight />
        </div>
    );
}

export default DashBoard;
