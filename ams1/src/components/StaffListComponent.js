import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardText } from 'reactstrap';
import dateFormat from 'dateformat';


class Staff extends Component {

    constructor(props) {
        super(props);

        this.state = {
            clickStaff: null,
            columSet: "col-sm-12 col-md-6 col-lg-4 pb-2 pt-2 text-center",

        };
    }

    render() {

        const staff = this.props.staffs.map((staff) => {
            return (

                <div className={this.state.columSet}>

                    <div key={staff.id}>
                        

                        <Card className='btn btn-outline-dark' onClick={() => this.onStaffClick(staff)}>
                            <CardTitle>{staff.name}</CardTitle>
                        </Card>

                    </div>
                </div>

            )
        });
        return (
            <div className='container'>
                <h3 className='text-body'>Thay đổi chế độ xem</h3>
                <button className='btn btn-primary' onClick={() => this.onDownClick()}>2 Cột</button>
                <button className='btn btn-success m-2' onClick={() => this.onMidClick()}>3 Cột</button>
                <button className='btn btn-warning' onClick={() => this.onUpClick()}>4 Cột</button>
                <div className='row'>
                    {staff}
                </div>

                <h4>Nhấn vào nhân viên để xem thông tin</h4>

                
                <div className='row pb-2'>
                    
                    {this.renderStaff(this.state.clickStaff)}
                    
                
                </div>

            </div>


        )

    }


    //Chuyển chế độ xem 2 cột
    onDownClick() {
        this.setState({ columSet: "col-sm-12 col-md-6 col-lg-6 p-3 text-center" });
    }
    //chế độ xem 3 cột
    onMidClick() {
        this.setState({ columSet: "col-sm-12 col-md-4 col-lg-4 p-3 text-center" });
    }
    //chế độ xem 4 cột
    onUpClick() {
        this.setState({ columSet: "col-sm-12 col-md-3 col-lg-3 p-3 text-center" });
    }
    //hàm onclick vào card (tên nhân viên) sẽ thay đổi giá trị null của clickStaff để nhận tham số staff
    onStaffClick(staff) {
        this.setState({ clickStaff: staff });
    }
    //render giá trị staff khi được click
    renderStaff(staff) {
        if (staff != null) {
            return (
                
                <Card className="col-sm-12 col-md-6 col-lg-4 ml-3 bg-dark text-light thongtin">
                    
                    <CardBody>
                        <CardTitle>{staff.name}</CardTitle>
                        <CardText>
                            Day of Birth: {dateFormat(staff.doB, "dd/mm/yyyy h:MM TT")}
                            <br />
                            Start of Date: {dateFormat(staff.startDate, "dd/mm/yyyy h:MM TT")}
                            <br />
                            Department: {staff.department.name}
                            <br />
                            Annual Leave: {staff.annualLeave}
                            <br />
                            OverTime: {staff.overTime}
                        </CardText>
                    </CardBody>
                    
                </Card>
            );
        } else {
            return (
                <div>
                </div>
            );
        }
    }

}

export default Staff;