// import React from "react";
// import { Card, CardImg, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap'
// import { Link } from 'react-router-dom';



// function RenderStaff({staff}) {
//     return(
//         <div>
//             <Card>
//             <Link to={`/nhansu/${staff.id}`}>
//                 <CardImg width="100%" src={staff.image} alt={staff.name} />
//                 <CardText>{staff.name}</CardText>
//                 </Link>
//             </Card>
//         </div>
//     )
// }
//  const Staffs = (props) => {
//      const staff = props.staffs.map((staff) =>{
//          return(
//              <div key={staff.id} className="col-12 col-md-2 m-1 center">
//                  <RenderStaff staff={staff} />
//              </div>
//          )
//      })

//      return(
//         <div className="container">
//         <div className="row">
//             {/* <Breadcrumb>
//                 <BreadcrumbItem>
//                     <Link to='/home'>Home</Link>
//                 </BreadcrumbItem>
//                 <BreadcrumbItem active>Nhân Sự</BreadcrumbItem>
//             </Breadcrumb> */}
//             <div className="col-12">
//                 <h3>Nhân Sự</h3>
//                 <hr />
//             </div>
//         </div>
//         <div className="row">
//             { staff }
//         </div>

//     </div>
//      )
//  }

//  export default Staffs;


import { Card, CardImg, CardBody } from 'reactstrap';
import React from 'react';
import {
    Breadcrumb, BreadcrumbItem, Form, Row, Input, Col,
} from "reactstrap";
import { Link } from "react-router-dom";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: this.props.staffs,
            isOpen: false,
            filter: this.props.staffs,

        }
        

    }





    render() {
        // duyệt qua mảng staffs render ra nhân viên
        const liststaff = this.state.staffs.map((staff) => {
            return (
                <div key={staff.id} className="col-6 col-md-4 col-xl-2 mb-3">
                    <Link className="text-reset text-decoration-none" to={`/nhansu/${staff.id}`}>
                        <Card className="text-center ">
                            <CardImg src="assets/images/alberto.png" />
                            <CardBody>
                                <h5 >{staff.name}</h5>
                            </CardBody>
                        </Card>
                    </Link >
                </div >

            )
        });
        return (
            <div className="container">
                <div className="row  mt-3">
                    <div className="col-md-3">
                        <Breadcrumb >
                            <BreadcrumbItem ><Link className=" text-decoration-none text-link" to="/home"><h3>Nhân Viên</h3></Link></BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="row">
                    {liststaff}
                </div>
            </div>
        )

    }
}


export default Home;