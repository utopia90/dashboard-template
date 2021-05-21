import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React from 'react';

// Iconos de Material UI
import HomeIcon from '@material-ui/icons/Home';
import CartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';

const getIcon = (icon) => {
    switch(icon) {
        case 'HOME':
            return (<HomeIcon />)
        case 'CART':
            return (<CartIcon />)
        case 'PEOPLE':
            return (<PeopleIcon />)
        case 'SETTINGS':
            return (<SettingsIcon />)
        default:
            return (<HomeIcon />)
    }
}


const MenuListItems = ({list}) => {

    const navegar = (ruta) => {
        console.log(`Navegar a: ${ruta}`)
    }

    return (
        <List>
            {list.map(({text, path,icon}, index) => 
                (
                    <ListItem key={index} button onClick={ () => navegar(path)}>
                        <ListItemIcon>
                            {/* Llamamos al método getIcon que nos va a devover el 
                            componente Icono que toque */}
                            {getIcon(icon)}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                )
            )}
        </List>
    );
}

export default MenuListItems;
