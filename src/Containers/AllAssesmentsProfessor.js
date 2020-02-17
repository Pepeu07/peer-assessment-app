import React, {Component} from 'react'
import Moment from 'moment'

// HomePage
import Assesments from '../Components/DashboardProfessor/AllAssesments'
import ToDOModal from '../Components/DashboardProfessor/ModalProfessor'
import CreateModal from '../Components/DashboardProfessor/CreateModal'



// Nav
import Nav from '../Components/NavBar'

// redirect
import {Redirect} from 'react-router-dom'


const toGrade=[
    {
        name:'Pedro',
        overallGrade:3.5,
        assessment:'Delivery 5 Assesment'
    },
    {
        name:'John',
        overallGrade:4.5,
        assessment:'Delivery 5 Assesment'
    },
    {
        name:'Adam',
        overallGrade:3.9,
        assessment:'Delivery 5 Assesment'
    }
]

const allAssesments=[
    {
        name:'Delivery 1 Assesments',
        dueDate:  Moment(new Date()).subtract(30, 'days').calendar(),
        overAll: 4.3,
    },
    {
        name:'Delivery 2 Assesments',
        dueDate:  Moment(new Date()).subtract(20, 'days').calendar(),
        overAll: 4.2,
    },
    {
        name:'Delivery 3 Assesments',
        dueDate:  Moment(new Date()).subtract(15, 'days').calendar(),
        overAll: 3.3,
    },
    {
        name:'Delivery 4 Assesments',
        dueDate:  Moment(new Date()).subtract(12, 'days').calendar(),
        overAll: 2.7,
    },
    {
        name:'Delivery 5 Assesments',
        dueDate:  Moment(new Date()).subtract(1, 'days').calendar(),
        overAll: 'N/A',
    },
    {
        name:'Delivery 6 Assesments',
        dueDate:  Moment(new Date()),
        overAll: 'N/A',
    }
]



class StudentHome extends Component{

    state={
        openToDoModal:false,
        todoSelected:null,
        todoResponses:null,
        logout:false,
        createModal:false

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
            />

            <CreateModal 
                close={this.handleClose}
                open={this.state.createModal}
            />

            {this.state.logout===true?<Redirect to='/login' />:null}

            </Nav>
        )
    }
}

export default StudentHome