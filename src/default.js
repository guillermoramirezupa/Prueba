import React from 'react';
import './App.css';
import axios from 'axios';
import List from '@material-ui/core/List';


    class People extends React.Component {
    state = {
        count : 0,
        value: null,
        people: []
    }
    componentDidMount() {
      axios.get('https://swapi.co/api/people')
        .then(res => {
            console.log('dentro del then');
            console.log(res);
            this.setState({ people: res.data.results });
        });
        console.log(`fuera del then -> $(this.state.people)`);
      }
   
      render(){
          return(
          <div><li/>
              {JSON.stringify(this.state.people)}
          </div>
          );  
    }
  }
  export default People;

