import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Button } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	appBar: {
		background: 'transparent',
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		boxShadow: 'none'
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginRight: drawerWidth
	},
	navItems: {
		marginLeft: 'auto',
		height: '100%'
	},
	listItemText: {
		fontSize: '1.7em',
		color: '#f8de01'
	},
	title: {
		flexGrow: 1
	},
	hide: {
		display: 'none'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth,
		background: 'black'
	},

	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
		justifyContent: 'flex-start'
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		marginRight: -drawerWidth
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginRight: 0
	}
}));

export default function PersistentDrawerRight(props) {
	const classes = useStyles();
	const theme = useTheme();
	const [ open, setOpen ] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};
	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open
				})}
			>
				<Toolbar>
					<a href="#home-main">
						<img
							src={require('../assets/rsz_output-onlinepngtools (1).png')}
							style={{ maxHeight: '90px', marginLeft: '-10px' }}
						/>
					</a>
					<div className={classes.navItems}>
						<Box display={{ xs: 'none', lg: 'block' }}>
							<Link className="nav-link" to="/events">
								Events
							</Link>
							<a className="nav-link" href="http://www.bits-spree.org/registration">
								Registration
							</a>
						</Box>
					</div>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="end"
						onClick={handleDrawerOpen}
						className={clsx(open && classes.hide)}
						style={{ color: '#f8de01', outline: 'none', focus: 'none' }}
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open
				})}
			>
				<div className={classes.drawerHeader} />
				{props.children}
			</main>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="right"
				open={open}
				classes={{
					paper: classes.drawerPaper
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton
						onClick={handleDrawerClose}
						style={{ color: '#f8de01', outline: 'none', focus: 'none' }}
					>
						{theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</div>
				<List>
					<Box display={{ xs: 'block', lg: 'none' }}>
						<Link to="/events">
							<ListItem button>
								<ListItemText classes={{ primary: classes.listItemText }}> Events </ListItemText>
							</ListItem>
						</Link>
						<a href="http://www.bits-spree.org/registration">
							<ListItem button>
								<ListItemText classes={{ primary: classes.listItemText }}> Registration </ListItemText>
							</ListItem>
						</a>
					</Box>
					<a href="#parent-about">
						<ListItem button>
							<ListItemText classes={{ primary: classes.listItemText }}> ABOUT US </ListItemText>
						</ListItem>
					</a>
					<a href="#gallery">
						<ListItem button>
							<ListItemText classes={{ primary: classes.listItemText }}> GALLERY </ListItemText>
						</ListItem>
					</a>
					<Link to="/team">
						<ListItem button>
							<ListItemText classes={{ primary: classes.listItemText }}> OUR TEAM </ListItemText>
						</ListItem>
					</Link>
					<Link to="/developers">
						<ListItem button>
							<ListItemText classes={{ primary: classes.listItemText }}> DEVELOPERS </ListItemText>
						</ListItem>
					</Link>
				</List>
			</Drawer>
		</div>
	);
}
