import React from 'react'

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActionArea';

import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';



import Moment from 'moment'



const StudentHome = props=>{


    let toDoArr;
    let closedArr;

    if(props.toGrade.length>0){
        toDoArr=props.toGrade.map((e,i)=>(
            <Grid item xs={12} md={4} sm={6} key={e.id}>
                <Card>
                    <CardActions onClick={()=>props.openModal(i)}>
                    <CardContent style={{display:'flex', alignItems:'flex-start', flexDirection:'column'}}>
                        <Typography variant='h5'> <b>{e.name}</b> </Typography>
                        <Typography variant='subtitle1'> <b>Assessment:</b> {e.assessment} </Typography>
                        <Typography variant='subtitle1'> <b>Overall Grade:</b> {e.overallGrade}/5 </Typography>
                        <Typography variant='subtitle2'> Click to Grade </Typography>
                    </CardContent>
                    </CardActions>
                    
                </Card>
            </Grid>
            
        ))
    }
    if(props.toGrade.length===0){
        toDoArr=props.toGrade.map(e=>(
            <Grid item xs={12} md={4} sm={6}>
                
                
                <Typography variant='subtitle2'> No Assessments in the to grade!</Typography>
                
            </Grid>
            
        ))
    }

    if(props.closedArr.length>0){
        closedArr=props.closedArr.map((e,i)=>(
            <Grid item xs={12} md={6} sm={6} key={e.id}>
                <Card>

                    <CardContent style={{display:'flex', alignItems:'flex-start', flexDirection:'column'}}>
                        <Typography variant='h5'> <b>{e.name}</b> </Typography>
                        <Typography variant='subtitle1' > <b>Due date:</b> {Moment(e.dueDate).format('MMMM Do YYYY')}</Typography>
                        <Typography variant='subtitle2' > <b>Class Overall: </b> {e.overAll}/5 </Typography>

                    </CardContent>
                    
                </Card>
            </Grid>
            
        ))
    }
    if(props.closedArr.length===0){
        closedArr=props.closedArr.map(e=>(
            <Grid item xs={12} md={4} sm={6}>
                
                <Typography variant='subtitle2'> No Assessments</Typography>
                
            </Grid>
            
        ))
    }


    return(
        <Grid container spacing={6}>

            <Grid item container sm={10} xs={10}>
                <Grid item sm={11}>
                    <Typography variant="h4">
                        To Grade
                    </Typography>
                </Grid>
                <Grid item sm={1}>

                    <Button variant='outlined' color='primary' onClick={props.openCreate}>
                        Create Assessment
                    </Button>
                </Grid>
            </Grid>

            <Grid item container sm={12} xs={12} spacing={6} style={{display:'flex',justifyContent:'space-between'}}>
                
                {toDoArr}                


            </Grid>

            <Grid item sm={10} xs={10}>
                <Typography variant="h4">
                    All Assessments
                </Typography>
            </Grid>

            <Grid item container sm={12} xs={12} spacing={6} style={{display:'flex',justifyContent:'space-between'}}>
                
                {closedArr}                


            </Grid>


        </Grid>
    )
}

export default StudentHome