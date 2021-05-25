import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Header extends Component{
    constructor(){
super();

    }
    render(){
        return(
            <div className="container mt-2">
    <div className="row">
        <div className="col-lg-3 text-center">
            <i className="fas fa-hotel fa-3x text-primary"></i>
            <div><small className="text-danger">Hotel Booking</small></div>
        </div>
        <div className="col-lg-9 text-right pt-2">
            <div className="btn-group">
                <Link to="/" className="btn btn-info"><i className="fa fa-home"></i> Dashboard</Link>
                <Link to="/newbooking" className="btn btn-success"><i className="fa fa-user-plus"></i> New Booking</Link>
                <Link to="/available/room" className="btn btn-primary"><i className="far fa-folder-open"></i>Manage Rooms</Link>
                
                <button className="btn btn-danger"><i className="fa fa-power-off"></i> Logout</button>
            </div>
        </div>
    </div>
</div>


        );

        

    }
}
export default Header;