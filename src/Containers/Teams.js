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

        studentName: null,
        teamSelected:null,
        notificationStudent:false,

        teamName:null,
        notificationTeam:false,
        createModalTeam:false,

        allStudent: toGrade

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
            createModal:false,
            createModalTeam:false
        })
      };

      openCreateModal = () => {
       this.setState({
        createModal:true,

       });
     };

     openCreateModalTeam = () => {
        this.setState({
            createModalTeam:true,
 
        });
      };


    // *------------ HANDLE CHANGE TEXT ----------------*
    textHandler=e=>{
        console.log(e)
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    teamSelectHandler=e=>{

        this.setState({
            [e.target.name]:e.target.value
        })
    }

    //  *------------ Create Functions -------------*
    submitNewStudentHandler=()=>{
        toGrade.push({
            name:this.state.studentName,
            team:this.state.teamSelected,
            overallGrade:'0'
        })

        this.setState({
            allStudent:toGrade,
            studentName:null,
            teamSelected:null,
            createModal:false,
            notificationStudent:true
        })
    }

    submitNewTeamHandler=()=>{
        AllTeams.push({
            name:this.state.teamName,
            members:[],
            overallGrade:'0'
        })

        this.setState({
            teamName:null,
            createModalTeam:false,
            notificationTeam:true
        })
    }

    //  *------------ CLOSE NOTIFICATION ----------------*
    handleCloseNot = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        this.setState({
            notificationStudent:false,
            notificationTeam:false
        })
      };


    // *------ DELETE STUDENT ---------*
    studentDelete = index=>{
        toGrade.splice(index,1)
        this.setState({
            allStudent:toGrade
        })
    }



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
                toGrade={this.state.allStudent}
                closedArr={AllTeams}
                openCreateModalTeam={this.openCreateModalTeam}
                openCreate={this.openCreateModal}
                studentDelete={this.studentDelete}
                />

            {/* Modal Student Create */}
            <CreateModal 
                close={this.handleClose}
                open={this.state.createModal}
                onChangeHandler={this.textHandler}
                studentName={this.state.studentName}
                teamSelected={this.state.teamSelected}
                submit={this.submitNewStudentHandler}
                type='student'
                teams={AllTeams}
                teamSelectHandler={this.teamSelectHandler}
            />

            {/* Modal Team Create */}
            <CreateModal 
                close={this.handleClose}
                open={this.state.createModalTeam}
                onChangeHandler={this.textHandler}
                teamName={this.state.teamName}
                submit={this.submitNewTeamHandler}
                type='team'
            />

            <SnackBar 
                    message='Student Created'
                    open={this.state.notificationStudent}
                    handleClose={this.handleCloseNot}
                
                />

             <SnackBar 
                    message='Team Created'
                    open={this.state.notificationTeam}
                    handleClose={this.handleCloseNot}
                
                />

            {this.state.logout===true?<Redirect to='/login' />:null}

            </Nav>
        )
    }
}

export default StudentHome