import Button from '@material-ui//core/Button';
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Axios from 'axios';


class TaskForm extends React.Component{

    state = {
        task: {}
    }
}


componentDidMount(){

    const {match} = this.PaymentResponse;
    if (match.props.taskid){
        Axios.get(\/ws/rest/tasks/${match.props.taskId})
    }
}

handleChange = field =>





<TextField
id="standard-password-input"
label="Password"
className={classes.textField}
type="password"
autoComplete="current-password"
margin="normal"
/>