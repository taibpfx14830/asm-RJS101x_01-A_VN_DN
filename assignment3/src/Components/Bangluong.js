import React, { Component } from "react";
import { STAFFS } from '../shares/staffs'
import { Card } from 'reactstrap'



class Bangluong extends Component {

    constructor(props){
        super(props)
            this.state = {
            staffs: STAFFS,
        }
    
    }
    render(){
        

        const bangluong = this.state.staffs.map((staff) => {

            let a = staff.salaryScale * 3000000
            let b = staff.overTime  * 200000

            a = parseInt(a) 
            b = parseInt(b) 

            let c = a + b
            
            return(
                <div className="col-12 col-md-6 col-lg-4 p-2">
                    <Card key={staff.id}>
                        <h2 className="m-1">{staff.name}</h2>
                        <div className="ms-3 mt-3">
                        <p>Mã nhân viên: {staff.id}</p>
                        <p>Hệ số lương: {staff.salaryScale}</p>
                        <p>Số giờ làm thêm: {staff.overTime}</p>
                        <div className="bg-light me-3">
                            <p className="ps-2 pb-1">Lương: {c} </p>
                        </div>
                        </div>
                    </Card>
                    </div>
            )
        } )
        return(
            <div className="container">
                <div className="row">
                <h1>Bảng lương</h1>
                {bangluong}
                </div>
            </div>
        )
    }
}
export default Bangluong;