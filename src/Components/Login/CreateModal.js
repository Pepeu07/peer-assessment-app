import React, {useState} from 'react'
import {
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    Typography,
    TextField,
    Button
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles= makeStyles((theme)=>({
    main:{
        display:'flex',
        flexDirection:'column',
        width:'100%'
    },
    question:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:'10px'
    },
    textInputs:{
        width:'80%'
    }

}))

const ModalCOmponent = props=>{
    const classes = useStyles()

    return(
        <Dialog open={props.open} onClose={props.handleClose} maxWidth='md' fullWidth> 
            <DialogTitle id="simple-dialog-title">Create a Student Account</DialogTitle>
            <DialogContent className={classes.main}>
            {props.errorCreate?<Typography>Please double check your inputs</Typography>:null}

            <div className={classes.question}>
                    <Typography variant='body1'>
                        First Name
                    </Typography>
                    <TextField
                    className={classes.textInputs}
                    onChange={props.textHandler}
                    variant="filled"
                    id='firstName'
                    />
                </div>
                <div className={classes.question}>
                    <Typography variant='body1'>
                        Last Name
                    </Typography>
                    <TextField
                    className={classes.textInputs}
                    onChange={props.textHandler}
                    variant="filled"
                    id='lastName'
                    />
                </div>
                <div className={classes.question}>
                    <Typography variant='body1'>
                        Email
                    </Typography>
                    <TextField
                    className={classes.textInputs}
                    onChange={props.textHandler}
                    variant="filled"
                    id='emailCreate'
                    />
                </div>
                <div className={classes.question}>
                    <Typography variant='body1'>
                        Password
                    </Typography>
                    <TextField
                    className={classes.textInputs}
                    onChange={props.textHandler}
                    type='password'
                    variant="filled"
                    id='passwordCreate1'
                    />
                </div>
                <div className={classes.question}>
                    <Typography variant='body1'>
                        Repeat Password
                    </Typography>
                    <TextField
                    className={classes.textInputs}
                    onChange={props.textHandler}
                    type='password'
                    variant="filled"
                    id='passwordCreate2'
                    />
                </div>

                <div className={classes.question}>
                    <Typography variant='body1'>
                        School Id
                    </Typography>
                    <TextField
                    className={classes.textInputs}
                    onChange={props.textHandler}
                    variant="filled"
                    id='schoolIdCreate'
                    />
                </div>

            </DialogContent>

            <DialogActions className={classes.question}>
                <Button variant='text' color='secondary' onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant='outlined' color='primary' onClick={props.createHandler}>Create</Button>
            </DialogActions>
        </Dialog>
    )

}


export default ModalCOmponent