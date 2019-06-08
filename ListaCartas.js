import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';



const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 600,
    height: 700, 
    
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});



 //const tileData = props.grilla;
//[
//     {
//         img : Batman,
//         title: 'Batman',
//         author : 'Alguien', 
//     },
//     {
//         img : peli1,
//         title : 'peli1',
//         author: 'alguiien1',
//     },
//     {
//         img : 'http://lorempixel.com/400/200',
//         title : 'peli2',
//         author : 'alguien 3'

//     },
//     {
//         img : 'http://lorempixel.com/400/200',
//         title : 'peli2',
//         author : 'alguien 3'

//     },
//     {
//       img : 'https://media.biobiochile.cl/wp-content/uploads/2019/05/3515433-endgamedek-750x400.jpg',
//       title : 'peli3',  
//       author : 'pedro',
//     },


// ]


/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
function ListaCartas(props) {
  const { classes } = props;
  console.log('props : ', props );
  const tileData = props.grilla;
  return (
    <div className={classes.root}>      
      <GridList cellHeight={180} cols={3} className={classes.gridList}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

ListaCartas.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListaCartas);