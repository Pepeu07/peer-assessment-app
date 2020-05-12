import React from 'react'

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActionArea';

import Typography from '@material-ui/core/Typography';

import Icon from '@material-ui/core/Icon';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import ErrorRoundedIcon from '@material-ui/icons/ErrorRounded';
import ListRoundedIcon from '@material-ui/icons/ListRounded';
import TimelineRoundedIcon from '@material-ui/icons/TimelineRounded';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';


import Moment from 'moment'



const StudentHome = props=>{


    let toDoArr;
    let answeredArr;

    if(props.assignments.length>0){
        toDoArr=props.assignments.map((e,i)=>(
            <Grid item xs={12} md={6} sm={6} key={e.id}>
                <Card>
                    <CardActions onClick={()=>props.openModalHandler(i)}>
                    <CardContent style={{display:'flex', alignItems:'flex-start', flexDirection:'column'}}>
                        <Typography variant='h5'> <b>{e.name}</b> </Typography>
                        <Typography variant='subtitle1'> <b>Due date:</b> {(e.dueDate)}</Typography>
                        <Typography variant='subtitle1'> <b>Made By:</b> {(e.madeBy)}</Typography>
                        <Typography variant='subtitle2'> Click here to start </Typography>
                    </CardContent>
                    </CardActions>
                    
                </Card>
            </Grid>
            
        ))
    }

    if(props.answered.length>0){
        answeredArr=props.answered.map((e,i)=>(
            <Grid item xs={12} md={6} sm={6} key={e.id}>
                <Card>

                    <CardContent style={{display:'flex', alignItems:'flex-start', flexDirection:'column'}}>
                        <Typography variant='h5'> <b>{e.formId.name}</b> </Typography>
                        <Typography variant='subtitle1'> <b>Due date:</b> {(e.formId.dueDate)}</Typography>
                        <Typography variant='subtitle1'> <b>Made By:</b> {(e.formId.madeBy)}</Typography>
                        <Typography variant='subtitle2' color='primary'> Answered </Typography>
                    </CardContent>
                    
                </Card>
            </Grid>
            
        ))
    }



    return(
        <Grid container spacing={6}>

            <Grid item sm={10} xs={10}>
                <Typography variant="h4" color='primary'>
                    To-Do 
                </Typography>
            </Grid>

            <Grid item container sm={12} xs={12} spacing={6} style={{display:'flex',justifyContent:'space-between'}}>
                
                {toDoArr}                


            </Grid>

            <Grid item sm={10} xs={10}>
                <Typography variant="h4" color='primary'>
                   Answered
                </Typography>
            </Grid>

            <Grid item container sm={12} xs={12} spacing={6} style={{display:'flex',justifyContent:'space-between'}}>
                
                {answeredArr}                


            </Grid>

        </Grid>
    )
}

export default StudentHome