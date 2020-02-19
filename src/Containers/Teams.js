import React, {Component} from 'react'
import Moment from 'moment'

// HomePage
import Teams from '../Components/DashboardProfessor/Teams'
import ToDOModal from '../Components/DashboardProfessor/ModalProfessor'
import CreateModal from '../Components/DashboardProfessor/CreateModal'



// Nav
import Nav from '../Components/NavBar'
import SnackBar from '../Components/Login/SnackBar'


// redirect
import {Redirect} from 'react-router-dom'


const toGrade=[
    {
        name:'Ted Cruz',
        team:'Nickelodeon Political Super Packs',
        overallGrade:3.5,
    },
    {
        name:'Bernie Sanders',
        team:'Nickelodeon Political Super Packs',
        overallGrade:4.5,
    },
    {
        name:'Drake Bell',
        team:'Nickelodeon Political Super Packs',
        overallGrade:4.9,
    },
    {
        name:'Mr.Clean',
        team:'🥔🥔',
        overallGrade:3.5,
    },
    {
        name:'Geico Lizzard',
        team:'🥔🥔',
        overallGrade:4.0,
    },
    {
        name:'Baby Yoda',
        team:'🥔🥔',
        overallGrade:4.8,
    }
]

const AllTeams=[
    {
        name:'Nickelodeon Political Superpacks',
        members:['Ted Cruz', 'Bernie Sanders', 'Drake Bell'],
        overAll: 4.3,
    },
    {
        name:'🥔🥔',
        members:['Mr.Clean', 'Baby Yoda', 'Geico Lizzard'],
        overAll: 4.2,
    },
    {
        name:'Never forget...',
        members:['Peter Pan', 'Invador Z', 'Pinky and Brain'],
        overAll: 3.3,
    },
    {
        name:'Okuuurrr',
        members:['Queen B', 'Niki Minaj', 'Cardi B'],
        overAll: 2.7,
    },
]



class StudentHome extends Component{

    state={
        openToDoModal:false,
        todoSelected:null,
        todoResponses:null,
        logout:false,
        createModal:false,

        assessmentName: null,
        assesmentDueDate:null,
        notification:false

    }


    // *----------HANDLE MODAL METHODS------------------*
     openModalHandler = (e) => {
         console.log(toGrade[e])
        this.setState({
            openToDoModal:true,
            todoSelected:toGrade[e]

        });
      };
    
    handleClose = () => {
        this.setState({
            openToDoModal:false,
            createModal:false
        })
      };

      openCreateModal = () => {
       this.setState({
        createModal:true,

       });
     };


    // *------------ HANDLE CHANGE TEXT ----------------*
    textHandler=e=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    //  *------------Assesment Create Functions -------------*
    submitNewHandler=()=>{
        AllTeams.push({
            name:this.state.assessmentName,
            dueDate:this.state.assesmentDueDate,
            overAll:'0'
        })

        this.setState({
            assessmentName:null,
            assesmentDueDate:null,
            createModal:false,
            notification:true
        })
    }

    //  *------------ CLOSE NOTIFICATION ----------------*
    handleCloseNot = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        this.setState({
            notification:false
        })
      };



    // LOGOUT
      onLogout=()=>{
        console.log('here')
        this.setState({
            logout:true
        })
    }



    render(){

      
        return(
            <Nav
                user="Professor"
                onLogout={this.onLogout}

            >
                <Teams
                toGrade={toGrade}
                closedArr={AllTeams}
                openModal={this.openModalHandler}
                openCreate={this.openCreateModal}
                />

            <ToDOModal 
                close={this.handleClose}
                open={this.state.openToDoModal}
                info={this.state.todoSelected}
            />

            <CreateModal 
                close={this.handleClose}
                open={this.state.createModal}
                onChangeHandler={this.textHandler}
                assessmentName={this.state.assessmentName}
                assessmentDate={this.state.assesmentDueDate}
                submit={this.submitNewHandler}
            />

            <SnackBar 
                    message='Assesment Created'
                    open={this.state.notification}
                    handleClose={this.handleCloseNot}
                
                />

            {this.state.logout===true?<Redirect to='/login' />:null}

            </Nav>
        )
    }
}

export default StudentHome