import React, { Component } from "react";
import { CardText, Card } from "reactstrap";
import { DEPARTMENTS } from '../shares/staffs'



class Phongban extends Component {

    constructor(props){
        super(props)
        this.state={
            departments: DEPARTMENTS,
            
        }
    }
    render(){

        const phongban = this.state.departments.map((department) => {
            return(
                <div className="col-12 col-md-6 col-lg-4 p-2">
                    <div key={department.id}>
                    <Card >
                        <div className="m-1">
                        <h3>{department.name}</h3>
                        </div>
                        <div className="ms-3 pb-3">
                        <CardText>Số lương nhân viên: {department.numberOfStaff}</CardText>
                        </div>
                    </Card>

                    
                        </div>
                    </div>
            )
        }
        )
        return(
            <div className="container">
                <div className="row">
                <h1>phòng ban</h1>
                <hr></hr>
                {phongban}
                </div>
            </div>
        )
    }
}
export default Phongban;