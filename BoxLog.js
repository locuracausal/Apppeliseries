import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

// const styles = theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     width: 600,
//     height: 700, 
    
//   },
//   icon: {
//     color: 'rgba(255, 255, 255, 0.54)',
//   },
// });


function FilledTextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="filled-name"
        label="Name"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('name')}
        margin="normal"
        variant="filled"
      />
   
     
    
      
      <TextField
        id="filled-password-input"
        label="Password"
        className={classes.textField}
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="filled"
      />
      
     
    </form>
  );
}


export default withStyles(styles)(FilledTextFields);
//export default withStyles(styles)(BarraBusqueda);
export default withStyles(styles)(ListaCartas);