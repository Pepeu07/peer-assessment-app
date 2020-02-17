import React, {Component} from 'react'
import Moment from 'moment'

// HomePage
import Assesments from '../Components/DashboardStudent/Completed'



// Nav
import Nav from '../Components/NavBar'

import {Redirect} from 'react-router-dom'



const assesmentsCompleted=[
    {
        name:'Delivery 1 Assesments',
        dueDate:  Moment(new Date()).subtract(30, 'days').calendar(),
        overAll: 3,
        teachersComment:'Do you even code brah?'
    },
    {
        name:'Delivery 2 Assesments',
        dueDate:  Moment(new Date()).subtract(20, 'days').calendar(),
        overAll: 3,
        teachersComment:'When are you dropping?'
    },
    {
        name:'Delivery 3 Assesments',
        dueDate:  Moment(new Date()).subtract(15, 'days').calendar(),
        overAll: 3,
        teachersComment:'Thoughts on millitary school?'
    },
    {
        name:'Delivery 4 Assesments',
        dueDate:  Moment(new Date()).subtract(5, 'days').calendar(),
        overAll: 2,
        teachersComment:'You gucci?'
    }
]





class StudentHome extends Component{

    state={

    }

    onLogout=()=>{
        console.log('here')
        this.setState({
            logout:true
        })
    }
    render(){

      
        return(
            <Nav
                user="Student"
                onLogout={this.onLogout}

            >
                <Assesments
                completedArr={assesmentsCompleted}
                />

            {this.state.logout===true?<Redirect to='/login' />:null}
            

            </Nav>
        )
    }
}

export default StudentHome