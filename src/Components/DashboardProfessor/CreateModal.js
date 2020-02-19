import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});



export default function FormDialog(props) {
    
  
  return (
    <div>
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
    </div>
  );
}