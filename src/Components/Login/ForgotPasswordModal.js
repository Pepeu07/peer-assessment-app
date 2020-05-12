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
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
    },
    question:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignContent:'center',
        marginBottom:'10px'
    },
    textInputs:{
        width:'70%',
        marginBottom:10
    }

}))

const ModalCOmponent = props=>{
    const classes = useStyles()

    return(
        <Dialog open={props.open} onClose={props.handleClose} maxWidth='md' fullWidth> 
            <DialogTitle id="simple-dialog-title">Create a Student Account</DialogTitle>
            <DialogContent className={classes.main}>
                <Typography>Please enter your email so we can send you the temporary token</Typography>
            {props.errorCreate?<Typography>Please double check your inputs</Typography>:null}
            {props.changePassError?<Typography>Oops, we couldn't find yout accouunt. Please double check your email</Typography>:null}
            {props.forgotPassError2?<Typography>Oops, seems like one of your information is wrong</Typography>:null}

                    <TextField
                    className={classes.textInputs}
                    onChange={props.textHandler}
                    id='emailCreate'
                    label='Email'
                    />

                   <Button color='primary' onClick={props.handleSendToken}>
                       Send Temporary Token
                   </Button>

                    <TextField
                    className={classes.textInputs}
                    onChange={props.textHandler}
                    id='token'
                    label='Token'

                    />


                    <TextField
                    className={classes.textInputs}
                    onChange={props.textHandler}
                    type='password'
                    label='New Password'
                    id='passwordCreate1'
                    />


                    <TextField
                    className={classes.textInputs}
                    onChange={props.textHandler}
                    type='password'
                    id='passwordCreate2'
                    label='Repeat Password'
                    />

                

            </DialogContent>

            <DialogActions >
                <Button variant='text' color='secondary' onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant='outlined' color='primary' onClick={props.handleForgotPass}>Send Token</Button>
            </DialogActions>
        </Dialog>
    )

}


export default ModalCOmponent