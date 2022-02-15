import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Staff from './components/StaffListComponent';
import { STAFFS } from './shared/staffs';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS
    };
  }
  render() {
  
  return (
    <div className="App">
      <Navbar className="bg-primary">
        
          <NavbarBrand className='text-white' href='/'>Ứng dụng quản lý nhân sự v1.0 </NavbarBrand>
        
      </Navbar>
      <Staff staffs={this.state.staffs} />
      
    </div>
  );
}
}
export default App;