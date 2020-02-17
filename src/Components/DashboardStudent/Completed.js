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



    let closedArr;


    if(props.completedArr.length>0){
        closedArr=props.completedArr.map((e,i)=>(
            <Grid item xs={12} md={6} sm={6} key={e.id}>
                <Card>

                    <CardContent style={{display:'flex', alignItems:'flex-start', flexDirection:'column'}}>
                        <Typography variant='h5'> <b>{e.name}</b> </Typography>
                        <Typography variant='subtitle1' > <b>Due date:</b> {Moment(e.dueDate).format('MMMM Do YYYY')}</Typography>
                        <Typography variant='subtitle2' > <b>Overall: </b> {e.overAll}/5 </Typography>
                        <Typography variant='subtitle2' > <b>Teacher's note: </b> {e.teachersComment} </Typography>

                    </CardContent>
                    
                </Card>
            </Grid>
            
        ))
    }
    if(props.completedArr.length===0){
        closedArr=props.closedArr.map(e=>(
            <Grid item xs={12} md={4} sm={6}>
                
                <Typography variant='subtitle2'> No Assessments Completed!</Typography>
                
            </Grid>
            
        ))
    }


    return(
        <Grid container spacing={6}>

            <Grid item sm={10} xs={10}>
                <Typography variant="h4" style={{color:'#39DA8A'}}>
                    Completed
                </Typography>
            </Grid>

            <Grid item container sm={12} xs={12} spacing={6} style={{display:'flex',justifyContent:'space-between'}}>
                
                {closedArr}                


            </Grid>


        </Grid>
    )
}

export default StudentHome