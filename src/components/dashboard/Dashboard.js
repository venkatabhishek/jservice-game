import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems } from './listItems';
import { withRouter } from 'react-router'
import { Route } from "react-router-dom";
import { compose } from 'redux';
import Profile from './items/Profile';
import Quiz from './items/Quiz';
import Settings from './items/Settings';
import Search from './items/Search'
import Button from '@material-ui/core/Button';


const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  button: {
    color: "white"
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    textAlign: "center"
    },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
});

class Dashboard extends React.Component {
  state = {
    open: true,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { match } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar
            position="absolute"
            className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
          >
            <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(
                  classes.menuButton,
                  this.state.open && classes.menuButtonHidden,
                )}
                button="true"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap className={classes.title}>
                jService Trivia
              </Typography>
              <Button color="primary" className={classes.button} onClick={this.props.logout}>
        LOGOUT
      </Button>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
            }}
            open={this.state.open}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>{mainListItems}</List>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Route exact path={`${match.url}/search`} component={Search} />
            <Route exact path={`${match.url}/settings`} component={Settings} />
            <Route exact path={`${match.url}/profile`} component={Profile} />
            <Route exact path={`${match.url}`} component={Quiz} />
            </main>
        </div>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(withRouter,withStyles(styles))(Dashboard);
