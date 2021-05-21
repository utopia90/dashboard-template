import React from 'react';

// Componentes de Material UI
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

// Iconos de Material UI
import HomeIcon from '@material-ui/icons/Home';
import CartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';

const navegar = (ruta) => {
    console.log(`Navegamos a /${ruta}`)
}

export const MainListMenu =  (
    <div>
        <ListItem button onClick={ () => navegar('Home')}>
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='Home' />
        </ListItem>
        <ListItem button onClick={ () => navegar('Contacts')}>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary='Contacts' />
        </ListItem>
        <ListItem button onClick={ () => navegar('Shop')}>
            <ListItemIcon>
                <CartIcon />
            </ListItemIcon>
            <ListItemText primary='Shop' />
        </ListItem>
    </div>
);

export const SecondaryListMenu = (
        <ListItem button onClick={ () => navegar('Settings')}>
            <ListItemIcon>
                <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary='Settings' />
        </ListItem>
);
