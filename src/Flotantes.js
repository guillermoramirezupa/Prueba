import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import Button from '@material-ui//core/Button';


const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));


export default function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <div>
      <Actions/>
    </div>
  );
  function Actions (){
    return(
      <div>
      <AgregarTarea/>
      <BorrarTarea/>
      <EditarTarea/>
      </div>
    );
  }
  
  function AgregarTarea(){
    return(
        <div>
      
      </div>
    );
  }
  
  function BorrarTarea(){
    return(
    <div>     
    </div>

    );
  }
  function EditarTarea(){
      return(
      );
  }


}




