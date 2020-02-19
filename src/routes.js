import React from 'react';
import {Route, Switch, BrowserRouter,Redirect} from 'react-router-dom';


import {
    Login,
    StudentHome,
    PeerAssesments,
    CompletedAssesments,
    ProfessorHome,
    AllAssesmentProfessor,
    Teams
} from './Containers'

// import LostPage from './components/404/404'




export default class BusWaysRoutes extends React.Component{
    state = {

    }
    _isMounted = false 
    async componentDidMount(){
        this._isMounted=true
    }

    componentWillUnmount(){
        this._isMounted=false
    }
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/studentHome' component={StudentHome} />
                    <Route exact path='/studentHome/assessments' component={PeerAssesments}/>
                    <Route exact path='/studentHome/completed' component={CompletedAssesments} />

                    <Route exact path='/professorHome' component={ProfessorHome} />
                    <Route exact path='/professorHome/assessments' component={AllAssesmentProfessor}/>
                    <Route exact path='/professorHome/teams' component={Teams}/>




                    {/* Dashboard */}
{/* 
                    <Route authed={this.state.authed} exact path='/dashboard/map' component={Map} />
                    
                    <Route authed={this.state.authed} path='/dashboard/parents/:parentId' component={IndividualParent}/>
                    <Route authed={this.state.authed} exact path='/dashboard/parents' component={Parents} />

                    <Route authed={this.state.authed} path='/dashboard/students/:studentId' component={IndividualStudent}/>
                    <Route authed={this.state.authed} exact path='/dashboard/students' component={Students} />
                    
                    <Route authed={this.state.authed} exact path='/dashboard/routes' component={Routes3} />
                    <Route authed={this.state.authed} exact path='/dashboard/routes/:routeId' component={IndividualRoute2} />


                    <Route authed={this.state.authed} exact path='/dashboard/dispatchTime/:dispatchTimeId' component={IndividualDispatchTime} />
                    <Route authed={this.state.authed} exact path='/dashboard/busstops/:busStopId' component={IndividualBusStop} /> */}


                    {/* <Route authed={this.state.authed} exact path='/dashboard/stats' component={Stats} />
                    <Route authed={this.state.authed} exact path='/dashboard/actions' component={Actions} />

                    <Route authed={this.state.authed} exact path='/dashboard/inbox' component={Inbox} />

                    <Route authed={this.state.authed} exact path='/dashboard/profile' component={Profile} />





                    <Route authed={this.state.authed} exact path='/dashboard/drivers' component={Drivers2} />
                    <Route authed={this.state.authed} exact path='/dashboard/drivers/:driverId' component={IndividualDriver}/>


                    <Route authed={this.state.authed} exact path='/dashboard' component={DashboardHome2} />

                    <Route authed={this.state.authed} exact path='/dashboard/dispatchTime' component={()=><Redirect to='/dashboard/routes'/>} /> */}

                {/* *---------------REDIRECT TO LOGIN--------------------* */}
                <Route exact path='/' component={()=><Redirect to='/login'/>} />

                

                    {/* 404 PAGE */}
                    {/* <Route component={LostPage} /> */}


                    {/* home page */}
                    {/* <Route exact path='/' component={Home} /> */}




                </Switch>
            </BrowserRouter>
        )
    }
}