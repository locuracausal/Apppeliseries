import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import MostrarResultadoBusqueda from '../componentes/MostrarResultadoBusqueda';
import BuscarPeliculas from '../componentes/BuscarPeliculas';
import BotonRegistrarse from './botonRegistrarse';
import BotonEntrar from "./botonEntrar";



const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 0,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.20),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
 
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    
    
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    
  }
});

class PrimarySearchAppBar extends React.Component {
  
  //linkear funciones
  constructor(props){
    super(props);
    this.state={
      data:
      {
        Title: "",
        Poster: "",
      },
      cajaTexto:"",
      anchorEl: null,
      mobileMoreAnchorEl: null,
      
    }
    this.ejecutarBusqueda = this.ejecutarBusqueda.bind(this);
    this.okBusqueda = this.okBusqueda.bind(this);
    this.failBusqueda = this.failBusqueda.bind(this);
    this.actualizarTitulo = this.actualizarTitulo.bind(this);
    
  }
  //fin linkear funciones

  

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };


  //adicion
  actualizarTitulo(nuevoTitulo)
  {
    console.log(nuevoTitulo.target.value)
    this.setState({cajaTexto : nuevoTitulo.target.value});
  }

  ejecutarBusqueda()
  {
    console.log("entre a buscar");
    BuscarPeliculas.invocarPeliculas(this.state.cajaTexto,this.okBusqueda,this.failBusqueda);
  }
  okBusqueda(newData)
  {
    
    //console.log("llegue");
    //console.log(newData);
    this.setState({data : newData});
    //console.log("data:"+this.state.data);
    console.log("props",this.props)
    this.props.mostrarResultados(newData);
    console.log("pase",newData);
  }

  failBusqueda(newData)
  {
    this.setState ({data : 'noData'});
  }
  //fin adicion
  
  

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
        <BotonEntrar/>
        <BotonRegistrarse/>
   
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
        <MostrarResultadoBusqueda data={this.state.data}></MostrarResultadoBusqueda>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              PeliQlas
            </Typography>
            
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase type="search" value = {this.state.cajaTexto} 
                placeholder="Buscar..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }} onChange={this.actualizarTitulo} onKeyDown={event => {
                
                if(event.keyCode===13)
                {
                  this.ejecutarBusqueda()
                }
                }}
              />
                
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
            <BotonEntrar/>
            <BotonRegistrarse/>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
               
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrimarySearchAppBar);
