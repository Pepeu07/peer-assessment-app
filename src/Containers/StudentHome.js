import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

// HomePage
import HomePage from '../Components/DashboardStudent/StudentHome'


// Nav
import Nav from '../Components/NavBar'




class StudentHome extends Component{

    state={
        logout:false
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
                <HomePage />

            {this.state.logout===true?<Redirect to='/login' />:null}

            </Nav>
        )
    }
}

export default StudentHome