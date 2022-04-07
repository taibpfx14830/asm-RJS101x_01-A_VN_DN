import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from './Nhansu';
import Phongban from './Phongban';
import Bangluong from './Bangluong';
import DetailStaff from './Thongtinnv';
import { STAFFS, DEPARTMENTS  } from '../shares/staffs'



class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: STAFFS,
            departments: DEPARTMENTS
        }
    }

    onAddStaff(newStaffs) {
        this.setState({ staffs: newStaffs })
    }

    render() {
        const { staffs } = this.state;

        
        const staffId = ({ match }) => {
            return <DetailStaff
                staff={staffs.filter((staff) => staff.id === parseInt(match.params.id), 10)[0]}
            />
        }

       
        

        
        const HomePage = () => {
            return (
                
                <Home staffs={staffs}
                onSubmit={(newStaffs => this.onAddStaff(newStaffs))} />
            )
        }

        return (
            <div>
                <Header />
                <Switch>
                
                
                    {/* <Route exact path="/nhansu" component={HomePage } />
                    <Route exact path="/nhansu/:id" component={staffId} />
                     <Route path="/bangluong">
                            <Bangluong />
                    </Route>
                    <Route path="/phongban" >
                        <Phongban departments={departments} />
                    </Route>
                     <Redirect to="/nhansu" /> */}

                     <Route exact path="/nhansu" component={HomePage} />
                    <Route exact path="/nhansu/:id" component={staffId} />
                    <Route path="/bangluong" component={() => <Bangluong staffs={staffs} />} />
                    <Route path="/phongban" component={() => <Phongban departments={this.props.departments} />} />
                    <Redirect to="/nhansu" />
                   </Switch> 
                <Footer />
                
                
            </div>
        )

    }
}

export default Main;