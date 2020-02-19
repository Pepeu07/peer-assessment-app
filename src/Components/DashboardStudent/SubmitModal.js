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


const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },
    {
        value: 4,
        label: '4',
    },
    {
        value: 5,
        label: '5',
    },
  ];

  function valuetext(value) {
    return `${value}`;
  }

export default function FormDialog(props) {
    
  let teamMatesForm;
  if(props.info !==null && props.info.teamMates.length>0){
    teamMatesForm= props.info.teamMates.map(e=>(

        <React.Fragment>

        <Typography id="discrete-slider-custom" gutterBottom style={{paddingTop:20}}>
        <b> {e}'s</b> Score. (0=Lowest / 5=Best)
        </Typography>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        marks={marks}
        min={0}
        max={5}
      />
        <TextField
            autoFocus
            margin="dense"
            id={`comment${e}`}
            label={`Comment on ${e}`}
            type="text"
            fullWidth
            onChange={props.onChangeHandler}
          />

        </React.Fragment>

    ))

  }

  return (
    <div>
      <Dialog open={props.open} onClose={props.close} aria-labelledby="form-dialog-title" TransitionComponent={Transition}>
        <DialogTitle id="form-dialog-title">{props.info?props.info.name:null}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the peer assesment for each of your teammates
          </DialogContentText>
         {teamMatesForm}

        </DialogContent>
        <DialogActions>
          <Button onClick={props.close} color="primary">
            Cancel
          </Button>
          <Button onClick={props.submit} color="primary" disabled>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}