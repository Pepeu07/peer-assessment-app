import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});



export default function FormDialog(props) {
    let create;

    if(props.type==='assessment'){
      create =(
        <Dialog open={props.open} onClose={props.close} aria-labelledby="form-dialog-title" TransitionComponent={Transition}>
        <DialogTitle id="form-dialog-title">Create a new Assessment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill out the following information...
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="assessmentName"
            label="Assesment Name"
            type="text"
            fullWidth
            onChange={props.onChangeHandler}
          />

        <TextField
            id="assesmentDueDate"
            label="Due Date"
            type="date"
            // defaultValue="2017-05-24"
            // className={classes.textField}
            InputLabelProps={{
            shrink: true,
            }}
            onChange={props.onChangeHandler}
        />

        </DialogContent>
        <DialogActions>
          <Button onClick={props.close} color="primary">
            Cancel
          </Button>
          <Button onClick={props.submit} color="primary" disabled={props.assessmentDate!==null && props.assessmentName!==null?false:true}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      )
    }

    if(props.type==='student'){
      create=(
        <Dialog open={props.open} onClose={props.close} aria-labelledby="form-dialog-title" TransitionComponent={Transition}>
        <DialogTitle id="form-dialog-title">Create a new Assessment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Student Name 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="studentName"
            label="Student Name"
            type="text"
            fullWidth
            onChange={props.onChangeHandler}
          />


      <FormControl variant="filled" style={{width:'100%'}}>
        <InputLabel id="demo-simple-select-filled-label">Team</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="teamSelected"
          name="teamSelected"
          value={props.teamSelected}
          onChange={props.teamSelectHandler}
        >

          {props.teams.map(team=><MenuItem key={team.name} value={team.name}>{team.name}</MenuItem>)}
          
        </Select>
      </FormControl>   

        </DialogContent>
        <DialogActions>
          <Button onClick={props.close} color="primary">
            Cancel
          </Button>
          <Button onClick={props.submit} color="primary" disabled={props.studentName!==null && props.teamSelected!==null?false:true}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
      )
    }

    if(props.type==='team'){
      create=(
        <Dialog open={props.open} onClose={props.close} aria-labelledby="form-dialog-title" TransitionComponent={Transition}>
        <DialogTitle id="form-dialog-title">Create a new Assessment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Team Name 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="teamName"
            label="Team Name"
            type="text"
            fullWidth
            onChange={props.onChangeHandler}
          />

          

          

        </DialogContent>
        <DialogActions>
          <Button onClick={props.close} color="primary">
            Cancel
          </Button>
          <Button onClick={props.submit} color="primary" disabled={props.teamName!==null ?false:true}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
      )
    }
  
  return (
    <div>
     {create}
    </div>
  );
}