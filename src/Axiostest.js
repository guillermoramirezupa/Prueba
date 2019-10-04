import React from 'react';
import './App.css';
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Tasks extends React.Component {
  state = {
      count : 0,
      value: null,
      task: []
  }
    componentDidMount() {
        axios.get('/ws/rest/tasks')
      .then(res => {
          this.setState({ task: res.data });
      });
    }
    
    render () {
        console.log('render');
        const {task} = this.state; 
        console.log(task);
        return (
            <div className = "Contenedor">
            <List>
                {task.map(p => { 
                    console.log(p);
                    return (
                        <ListItem key={p.name}>
                        <ListItemText
                        primary={p.name}
                        />
                        </ListItem>
          
                    )
                })
                }
            </List>
            </div>
              );
}
}
export default Tasks;