import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import Settings from '@material-ui/icons/Settings';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <Link to="/app" style={{ textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Quiz" />
    </ListItem>
      </Link>
        <Link to="/app/search" style={{ textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon button>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Topic Search" />
    </ListItem>
      </Link>
          <Link to="/app/profile" style={{ textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
      </Link>
        <Link to="/app/settings"style={{ textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon>
        <Settings />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
      </Link>
  </div>
);
