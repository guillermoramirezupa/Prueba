import React from 'react';
import axios from 'axios';
import Proptype from 'prop-types';
import ListItem from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItem from '@material-ui/core/ListItemText';

class Axio extends React.Component {
  state = {
      count : 0,
      value: null,
      people: []
  }
    componentDidMount() {
        console.log('componentDidMount');
        axios.get('ws/rest/tasks')
      .then(res => {
          this.setState({ people: res.data });
      });
      console.log('fuera del then -> $(this.state.people}');
    }
    
    render () {
        console.log('render');
        //const {classes} = this.props; // this.props.classes
        const {people} = this.state; //this.state.tasks
        console.log(people);
        return (
    
        <>  
            <List>
                {people.map(p => { 
                    console.log(p);
                    return (
                        <ListItem key={p.name}>
                        <ListItemText
                        primary={p.name}
                        secondary={p.type.description}
                        />
                        </ListItem>
                    )
                })
                }
            </List>
        </>
        );
    }

}



export default Axio;