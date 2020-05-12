import React, {Component} from 'react'
import Container from '@material-ui/core/Container'
// import pages
import FirstPage from '../Components/Login/1stPage'
import StudentLogin from '../Components/Login/StudentLogin'
import ProfessorLogin from '../Components/Login/ProfessorLogin'
import DialogCreate from '../Components/Login/CreateModal'
import Dialogforgot from '../Components/Login/ForgotPasswordModal'



// Import Custom Components
import SnackBar from '../Components/Login/SnackBar'

// import router redirect

import {withRouter,Redirect} from 'react-router-dom'
import Axios from 'axios'


// *----------------DUMMY DATA ------------------*
const professorCredentials ={
    username:'professor@bc.edu',
    pass:'12345678'
}

const studentCredentials ={
    username:'student@bc.edu',
    pass:'12345678'
}


class Login extends Component{

    // *------------ INITIALIZE STATE ----------------*
    state={
        typeSelected:null,
        step:0,

        professorEmail:null,
        professorPassword:null,

        studentEmail:null,
        studentPassword:null,

        wrongCredentials: false,

        professorRedirect:false,
        studentRedirect:false,


        openCreate:false,
        emailCreate:'',
        passwordCreate1:'',
        passwordCreate2:'',
        schoolIdCreate:'',
        firstName:'',
        lastName:'',
        errorCreate:false,
        createNotification:false,


        forgotPass:false,
        changePassError:false,
        token:'',
        forgotPassNotification:false,
        forgotPassError2:false


    }


    // *-----------HANDLE SELECT TYPE ------*

    onClickTypeHandler=e=>{
        if(e==='Student'){
            this.setState({
                typeSelected:'Student'
            })
        }
        if(e==='Professor'){
            this.setState({
                typeSelected:'Professor'
            })
        }
    }

    // *------------- NEXT -------------*
    onClickNext=e=>{
        if(this.state.step===0){
            this.setState({
                step:1
            })
        }
        if(this.state.step===1){
            this.setState({
                step:0,
                typeSelected:null,
                studentEmail:null,
                studentPassword:null,
                professorEmail:null,
                professorPassword:null

            })
        }
    }


    // *------------ HANDLE CHANGE TEXT ----------------*
    textHandler=e=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    // ----------------- HANDLE OPEN---------------
    openModalhandler=()=>{
        let opened= this.state.openCreate
        this.setState({
            openCreate:!opened
        })
    }


    // *------------- LOGIN -----------------*
    loginHandler= async e=>{
        e.preventDefault()
        e.stopPropagation();
        if(this.state.typeSelected==='Student'){
            // *----------- CHANGE WITH DJANGO SERVER ---------------*

            let login = await Axios.post('https://peer-assingment-sever.herokuapp.com/api/auth/loginStudent',{
                email:this.state.studentEmail.toLowerCase().trim(),
                password:this.state.studentPassword
            })
            console.log(login)
            // localStorage.setItem('userType','Professor')
            //     this.setState({
            //         professorRedirect:true
            //     })
            if(login.data===false){
                this.setState({
                    wrongCredentials:true
                })
            }
            else{
                // *--------- ADD TOKEN ----------------*
                localStorage.setItem('token',login.data._id)
                localStorage.setItem('userType','Student')
                this.setState({
                    studentRedirect:true
                })
            }

        }

        if(this.state.typeSelected==='Professor'){
            // *----------- CHANGE WITH DJANGO SERVER ---------------*

            let login = await Axios.post('https://rsnce.com/api/token-auth/',{
                email:this.state.professorEmail.toLowerCase().trim(),
                password:this.state.professorPassword
            })
            localStorage.setItem('userType','Professor')
                this.setState({
                    professorRedirect:true
                })
            // console.log(login)
            // if(professorCredentials.username !== this.state.professorEmail.toLowerCase() || professorCredentials.pass!==this.state.professorPassword){
            //     this.setState({
            //         wrongCredentials:true
            //     })
            // }
            // else{
            //     localStorage.setItem('userType','Professor')
            //     this.setState({
            //         professorRedirect:true
            //     })

            // }

        }

    }


    // *---------------------- Handle create ----------------------
    createHandler=async ()=>{
        let firstName=this.state.firstName
        let lastName=this.state.lastName
        let email=this.state.emailCreate
        let password1=this.state.passwordCreate1
        let password2=this.state.passwordCreate2
        let studentId=this.state.schoolIdCreate

        if(firstName.trim()==='' || lastName.trim()===''||email.trim()===''|| password1!==password2|| studentId.trim()===''){
            this.setState({
                errorCreate:true
            })
            return
        }

       let created = await Axios.post('https://peer-assingment-sever.herokuapp.com/api/create/createStudent',{
           firstName,
           lastName,
           email,
           password:password1,
           studentId
       })

       console.log(created)

       if(created.data===false){
            this.setState({
                errorCreate:true
            })
            return
       }
       else{
            this.setState({
                openCreate:false,
                createNotification:true
            })
            return
       }

    }



    //  *------------ CLOSE NOTIFICATION ----------------*
     handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        this.setState({
            wrongCredentials:false,
            createNotification:false,
            forgotPass:false,
            forgotPassNotification:false
        })
      };



    //   --------------------- forgot password-------------
      handleForgotPassOpen=()=>{
          this.setState({
              forgotPass:true
          })
      }

    // ------------------- send token ------------
    handleSendToken=async()=>{
        let tokenSent= await Axios.post('https://peer-assingment-sever.herokuapp.com/api/auth/sendToken',{
            email:this.state.emailCreate
        })
        console.log(tokenSent)
        if(tokenSent.data===false){
            this.setState({
                changePassError:true
            })
            return;
        }
    }

    // -------------- handle change password --------------
    handleForgotPass=async ()=>{
        if(this.state.passwordCreate1!==this.state.passwordCreate2){
            alert('password do not match')
            return;
        }

        let changed = await Axios.post('https://peer-assingment-sever.herokuapp.com/api/auth/changePassword',{
            token:this.state.token,
            password:this.state.passwordCreate1,
            email:this.state.emailCreate
        })

        if(changed.data===true){
            this.setState({
                forgotPass:false,
                forgotPassNotification:true
            })
        }else{
            alert('Please double check your information and your token')
        }

    }



    render(){
        // pageContent
        let pageContent = (
            <FirstPage
                    clickTypeHandler={this.onClickTypeHandler}
                    selected={this.state.typeSelected}
                    nextHandler={this.onClickNext}
                />

        )

        // Change to Student Login 
        if(this.state.step===1 && this.state.typeSelected==='Student'){
            pageContent=(
                <StudentLogin
                    handleBack={this.onClickNext}
                    textHandler={this.textHandler}
                    loginHandler={this.loginHandler}
                    pass={this.state.studentPassword}
                    email={this.state.studentEmail}
                    createModal={this.openModalhandler}
                    handleForgotPassOpen={this.handleForgotPassOpen}
                />
            )
        }

         // Change to Professor Login 
         if(this.state.step===1 && this.state.typeSelected==='Professor'){
            pageContent=(
                <ProfessorLogin
                    handleBack={this.onClickNext}
                    textHandler={this.textHandler}
                    loginHandler={this.loginHandler}
                    pass={this.state.professorPassword}
                    email={this.state.professorEmail}

                />
            )
        }


        return(
            <Container style={{height:'100%'}}>
                {pageContent}



                <DialogCreate
                    handleClose={this.openModalhandler}
                    open={this.state.openCreate}
                    textHandler={this.textHandler}
                    errorCreate={this.errorCreate}
                    createHandler={this.createHandler}
                />

                <Dialogforgot 
                    open={this.state.forgotPass}
                    handleClose={this.handleClose}
                    textHandler={this.textHandler}
                    handleSendToken={this.handleSendToken}
                    changePassError={this.state.changePassError}
                    handleForgotPass={this.handleForgotPass}
                    forgotPassError2={this.forgotPassError2}
                />
            
                <SnackBar 
                    message='Wrong Credentials'
                    open={this.state.wrongCredentials}
                    handleClose={this.handleClose}
                
                />
                <SnackBar 
                    message='Account Created'
                    open={this.state.createNotification}
                    handleClose={this.handleClose}
                
                />
                 <SnackBar 
                    message='Password Changed'
                    open={this.state.forgotPassNotification}
                    handleClose={this.handleClose}
                
                />


                {this.state.professorRedirect?<Redirect to='/professorHome/'/>:null}
                {this.state.studentRedirect?<Redirect to='/studentHome/'/>:null}

            </Container>
        )
    }
}


export default withRouter(Login)