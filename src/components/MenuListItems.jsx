import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import React from "react";

// Iconos de Material UI
import HomeIcon from "@material-ui/icons/Home";
import CartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import SettingsIcon from "@material-ui/icons/Settings";
import HomePage from "../pages/HomePage";
import Cart from "../pages/Cart";
import Contacts from "../pages/Contacts";

const getIcon = (icon) => {
  switch (icon) {
    case "HOME":
      return <HomeIcon />;
    case "CART":
      return <CartIcon />;
    case "PEOPLE":
      return <PeopleIcon />;
    case "SETTINGS":
      return <SettingsIcon />;
    default:
      return <HomeIcon />;
  }
};

const MenuListItems = ({ list }) => {
  const navegar = (path) => {


    return (
      <Switch>
        <Route path={"/home"} component={HomePage} />
        <Route path={"/cart"} component={Cart} />
        <Route path={'/contacts'} component={Contacts} />
      </Switch>
    );
  };

  return (
    <List>
      {list.map(({ text, path, icon }, index) => (
        <ListItem key={index} button onClick={() => navegar(path)}>
          <ListItemIcon>
            {/* Llamamos al método getIcon que nos va a devover el 
                            componente Icono que toque */}
            {getIcon(icon)}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );
};

export default MenuListItems;
