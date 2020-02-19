import React, {Component} from 'react'
import Moment from 'moment'

// HomePage
import Assesments from '../Components/DashboardProfessor/AllAssesments'
import ToDOModal from '../Components/DashboardProfessor/ModalProfessor'
import CreateModal from '../Components/DashboardProfessor/CreateModal'



// Nav
import Nav from '../Components/NavBar'
import SnackBar from '../Components/Login/SnackBar'


// redirect
import {Redirect} from 'react-router-dom'


const toGrade=[
    {
        name:'Pedro',
        team:1,
        overallGrade:3.5,
        assessment:'Delivery 5 Assessments'
    },
    {
        name:'John',
        team:4,
        overallGrade:4.5,
        assessment:'Delivery 5 Assessments'
    },
    {
        name:'Adam',
        team:2,
        overallGrade:3.9,
        assessment:'Delivery 5 Assessments'
    }
]

const allAssesments=[
    {
        name:'Delivery 1 Assessments',
        dueDate:  Moment(new Date()).subtract(30, 'days').calendar(),
        overAll: 4.3,
    },
    {
        name:'Delivery 2 Assessments',
        dueDate:  Moment(new Date()).subtract(20, 'days').calendar(),
        overAll: 4.2,
    },
    {
        name:'Delivery 3 Assessments',
        dueDate:  Moment(new Date()).subtract(15, 'days').calendar(),
        overAll: 3.3,
    },
    {
        name:'Delivery 4 Assessments',
        dueDate:  Moment(new Date()).subtract(12, 'days').calendar(),
        overAll: 2.7,
    },
]



class StudentHome extends Component{

    state={
        openToDoModal:false,
        todoSelected:null,
        toDoIndex:null,
        todoResponses:null,
        logout:false,
        createModal:false,

        assessmentName: null,
        assesmentDueDate:null,
        notification:false,

        toGrade:toGrade

    }


    // *----------HANDLE MODAL METHODS------------------*
     openModalHandler = (e) => {

        this.setState({
            openToDoModal:true,
            todoSelected:toGrade[e],
            toDoIndex:e

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
        allAssesments.push({
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

      //  *------------Submit ToDo Functions -------------*
      submitToDoHandler=()=>{
       toGrade.splice(this.state.toDoIndex,1)


       this.setState({
            openToDoModal:false,
            createModal:false,
            toDoIndex:null,
            todoSelected:null
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
                <Assesments
                toGrade={toGrade}
                closedArr={allAssesments}
                openModal={this.openModalHandler}
                openCreate={this.openCreateModal}
                />

            <ToDOModal 
                close={this.handleClose}
                open={this.state.openToDoModal}
                info={this.state.todoSelected}
                submit={this.submitToDoHandler}
            />

            <CreateModal 
                close={this.handleClose}
                open={this.state.createModal}
                onChangeHandler={this.textHandler}
                assessmentName={this.state.assessmentName}
                assessmentDate={this.state.assesmentDueDate}
                submit={this.submitNewHandler}
                type='assessment'

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