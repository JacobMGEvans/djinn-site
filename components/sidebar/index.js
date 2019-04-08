import React, { useState } from 'react';
import { Link } from '@reach/router';

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { style } from './style';

import djinnLogo from '../../assets/DjinnIcon.png';

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },

  ...style
});

const primaryListDjinn = ['Home', 'About', 'Contact Me'];
const secondaryListDjinn = ['Media', 'Build Log', 'Tools & Materials', 'FAQ'];

const PersistentDrawerLeft = ({ classes }) => {
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classNames(classes.appBar, {
          [classes.appBarShift]: open
        })}
        style={{ backgroundColor: '#222' }}>
        <Toolbar disableGutters={!open}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawer}
            className={classNames(classes.menuButton, open && classes.hide)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            Fabricator Djinn
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawer}>{<ChevronLeftIcon />}</IconButton>
        </div>
        <img
          style={{ width: '15vw', alignSelf: 'center' }}
          src={djinnLogo}
          alt="Djinn Logo"
        />
        <Divider />
        <List>
          {primaryListDjinn.map(text => (
            <Link to={`/${text}`} onClick={handleDrawer} key={text}>
              <ListItem button key={text} onClick={handleDrawer}>
                <ListItemText primary={text} id={text} key={text} />
              </ListItem>
            </Link>
          ))}
          <a
            href="https://www.twitch.tv/fabricatordjinn"
            style={{ position: 'relative', left: '1.5vw', top: '.9vh' }}>
            <ListItemText
              primary={'Live Build Stream!'}
              id={'Live Build Stream!'}
              key={'Live Build Stream!'}
            />
          </a>
        </List>
        <Divider style={{ position: 'relative', top: '1.5vh' }} />
        <List>
          {secondaryListDjinn.map(text => (
            <Link to={`/${text}`} onClick={handleDrawer} key={text}>
              <ListItem button key={text} onClick={handleDrawer}>
                <ListItemText primary={text} id={text} key={text} />
              </ListItem>
            </Link>
          ))}
          <a
            href="https://www.etsy.com/shop/FabricatorDjinn"
            style={{ position: 'relative', left: '1.5vw', top: '1.5vh' }}>
            <ListItemText primary="Shop" id="Shop" key="Shop" />
          </a>
        </List>
      </Drawer>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);
