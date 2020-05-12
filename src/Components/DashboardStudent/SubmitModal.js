import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slide from '@material-ui/core/Slide';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});


export default function FormDialog(props) {
    console.log(props.info)
  let teamMatesForm;

  teamMatesForm= props.info.questions.map((q,i)=>{
    let question
    if(q.qtype==='Text'){
      question=(
        <TextField
          autoFocus
          margin="dense"
          id={q._id}
          label={`${q.name}`}
          type="text"
          fullWidth
          onChange={(e)=>props.onChangeHandler(e.target.value,i)}
        />
      )
    }
    if(q.qtype==='Multiple'){
      question=(
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          onChange={(e)=>props.onChangeHandler(e.target.value,i)}
        >
          {q.options.map((val,i)=><MenuItem value={val} key={i}>{val}</MenuItem>)}

        </Select>
      )
    }

    return(
      <React.Fragment key={q._id}>
        {question}
      </React.Fragment>
    )

  })

  // if(props.info !==null && props.info.teamMates.length>0){
  //   teamMatesForm= props.info.teamMates.map(e=>(

  //       <React.Fragment>

  //       <Typography id="discrete-slider-custom" gutterBottom style={{paddingTop:20}}>
  //       <b> {e}'s</b> Score. (0=Lowest / 5=Best)
  //       </Typography>
   
  //       <TextField
  //           autoFocus
  //           margin="dense"
  //           id={`comment${e}`}
  //           label={`Comment on ${e}`}
  //           type="text"
  //           fullWidth
  //           onChange={props.onChangeHandler}
  //         />

  //       </React.Fragment>

  //   ))

  // }

  return (
    <div>
      <Dialog open={props.open} onClose={props.close} aria-labelledby="form-dialog-title" TransitionComponent={Transition}>
        <DialogTitle id="form-dialog-title">{props.info?props.info.name:null}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the peer assesment...
          </DialogContentText>
         {teamMatesForm}

        </DialogContent>
        <DialogActions>
          <Button onClick={props.close} color="primary">
            Cancel
          </Button>
          <Button onClick={props.submit} color="primary" >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}