import React from 'react';

import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';



// images
import Professor from '../../Assets/professor.svg'
import Student from '../../Assets/student.svg'




const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();

  return (
    // <Container component="main" maxWidth="sm" >


        <Grid container direction="row" justify="center" alignItems="center" style={{height:'100%'}} spacing={4}>
            
            <Grid item style={{ display:'flex',flexDirection:'column', alignContent:'center', alignItems:'center', width:'100%', paddingTop:75}} xs={12} sm={12} >
                <Typography variant="h4" style={{fontWeight:'bolder', fontFamily:'IBM Plex Sans'}}> <b>Welcome</b>,</Typography>
                <Typography variant="h5"> Are you a...</Typography>
            </Grid>


            <Grid item container direction="row" justify="center" alignItems="center" xs={12} sm={12} spacing={4}>

                <Grid item sm={10} md={6}> 
                    
                <Card style={{backgroundColor:`${props.selected==='Professor'?'#070080':'#fff'}`,  }}>
                    <CardActionArea style={{display:'flex',flexDirection:'row', padding:20, justifyContent:'space-around'}} onClick={()=>props.clickTypeHandler('Professor')}>
                        <img src={Professor} title="Contemplative Reptile" alt='professor' style={{width:'52%'}}/>

                        <CardContent style={{display:'flex',flexDirection:'column', justifyContent:'center'}}>
                            <Typography gutterBottom variant="h5" component="h2" style={{color:`${props.selected==='Professor'?'#f2f4f4':'#000'}`}}>
                                Professor
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" style={{color:`${props.selected==='Professor'?'#f2f4f4':'#000'}`}}>
                                Click here
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                   
                </Card>




                </Grid>

                {/* STUDENT CARD */}
                <Grid item md={6} sm={10}> 
                
                    <Card 
                        style={{backgroundColor:`${props.selected==='Student'?'#070080':'#fff'}`}}
                    >
                        <CardActionArea style={{display:'flex',flexDirection:'row', padding:20, justifyContent:'space-around'}} onClick={()=>props.clickTypeHandler('Student')}>
                            {/* <div style={{backgroundColor:'#F9A826'}}> */}
                                <img src={Student} title="Contemplative Reptile" alt='professor' style={{width:'35%'}}/>
                            {/* </div> */}
                            <CardContent style={{display:'flex',flexDirection:'column', justifyContent:'center', marginLeft:20}}>
                                <Typography gutterBottom variant="h5" component="h2" style={{color:`${props.selected==='Student'?'#f2f4f4':'#000'}`}}>
                                    Student
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" style={{color:`${props.selected==='Student'?'#f2f4f4':'#000'}`}}>
                                    Click here
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    
                    </Card>
                
                </Grid>  
            </Grid>


            <Grid item sm={10} md={10} style={{display:'flex',flexDirection:'row', padding:20, justifyContent:'center'}}>

                <Button variant={`${props.selected!==null?'contained':'outlined'}`} style={{width:'30%'}} color='primary' onClick={props.nextHandler} disabled={props.selected!==null?false:true}>
                    Next
                </Button>
            </Grid>



        </Grid>


    // </Container>
  );
}