import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from './Nhansu';
import Phongban from './Phongban';
import Bangluong from './Bangluong';
import DetailStaff from './Thongtinnv';
import { STAFFS  } from '../shares/staffs'


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: STAFFS,
            
        }
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
                
                <Home staffs={staffs} />
            )
        }

        return (
            <div>
                <Header />
                <Switch>
                
                
                    <Route exact path="/nhansu" component={HomePage } />
                    <Route exact path="/nhansu/:id" component={staffId} />
                     <Route path="/bangluong">
                            <Bangluong />
                    </Route>
                    <Route path="/phongban" >
                        <Phongban />
                    </Route>
                     <Redirect to="/nhansu" />
                   </Switch> 
                <Footer />
                
                
            </div>
        )

    }
}

export default Main;