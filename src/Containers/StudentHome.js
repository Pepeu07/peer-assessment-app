import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

// HomePage
import HomePage from '../Components/DashboardStudent/StudentHome'
import ToDOModal from '../Components/DashboardStudent/SubmitModal'
import Axios from 'axios'


// Nav
import Nav from '../Components/NavBar'




class StudentHome extends Component{

    state={
        logout:false,
        assignments:[],
        todoSelected:{questions:[]},
        openToDoModal:false,
        answers:[],
        answered:[]
    }

    async componentDidMount(){
        let questions = await Axios.get('https://peer-assingment-sever.herokuapp.com/api/create/assingmentFound')

        let answered = await Axios.post('https://peer-assingment-sever.herokuapp.com/api/create/getAnswered',{
            studentId:localStorage.getItem('token')
        })
        console.log(questions)
        this.setState({
            assignments:questions.data,
            answered:answered.data
        })
    }

    onLogout=()=>{
        console.log('here')
        this.setState({
            logout:true
        })
    }

     // *----------HANDLE MODAL METHODS------------------*
     openModalHandler = (e) => {
        console.log(this.state.assignments[e])
        let answers=[...this.state.assignments[e].questions]
       this.setState({
           openToDoModal:true,
           todoSelected:this.state.assignments[e],
           answers:answers

       });
     };

     handleClose=(e)=>{
        this.setState({
           openToDoModal:false,

        })
     }

     onChangeHandler=(value,i)=>{
        console.log(value,i,'here')
        let answers = [...this.state.answers]
        answers[i].answer=value

        console.log(answers)
        this.setState({
            answers:answers
        })


     }

     onSubmitHandler=async()=>{
        let answers = [...this.state.answers]
        let answerSubmitted = await Axios.post('https://peer-assingment-sever.herokuapp.com/api/create/answer',{
            todoSelected:this.state.todoSelected,
            answers:this.state.answers,
            studentId:localStorage.getItem('token')
        })
        let newTodo = this.state.assignments.filter(x=>{
            if(x._id !==this.state.todoSelected._id){
                return x
            }
        })

        this.setState({
            answered:answerSubmitted.data,
            openToDoModal:false,
            assignments:newTodo
        })

     }

    render(){

      
        return(
            <Nav
                user="Student"
                onLogout={this.onLogout}
            >
                <HomePage
                    assignments={this.state.assignments}
                    openModalHandler={this.openModalHandler}
                    answered={this.state.answered}
                />

            <ToDOModal 
                close={this.handleClose}
                open={this.state.openToDoModal}
                info={this.state.todoSelected}
                onChangeHandler={this.onChangeHandler}
                submit={this.onSubmitHandler}
            />      

            {this.state.logout===true?<Redirect to='/login' />:null}

            </Nav>
        )
    }
}

export default StudentHome