import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Dashboard extends Component{
    constructor(){
        super();

    }
    render(){
        return(
            <div className="container p-5 mt-3">
                <div className="row text-center">
                    <div className="col-lg-3 form-group">
                        <Link to="/newbooking">
                        <i className="fa fa-user-plus fa-3x text-success"></i>
                        <h4 className="text-success"> New Booking </h4>
                         </Link>
                    </div>
        <div className="col-lg-3 form-group">
            <Link to="/available/room">
                <i className="far fa-folder-open fa-3x text-primary"></i>
                <h4 className="text-primary"> Available Rooms <br/> 200 </h4>
            </Link>
        </div>
        <div className="col-lg-3 form-group">
            <Link to="/booked/room">
                <i className="fa fa-bed fa-3x text-warning"></i>
                <h4 className="text-warning"> Booked Rooms <br/> 300</h4>
            </Link>
        </div>
        <div className="col-lg-3 form-group">
            <Link to="/allroom/room">
                <i className="fa fa-hotel fa-3x text-info"></i>
                <h4 className="text-info"> Total Rooms <br/> 500 </h4>
            </Link>
        </div>
        <div className="col-lg-3 form-group">
            <Link to="/category">
                <i className="fa fa-cogs fa-3x text-danger"></i>
                <h4 className="text-danger"> Manage Category </h4>
            </Link>
        </div>
        <div className="col-lg-3 form-group">
            <Link to="/newroom">
                <i className="fa fa-plus fa-3x text-secondary"></i>
                <h4 className="text-secondary">Add New Rooms </h4>
            </Link>
        </div>
    </div>
</div>

        );
    }
}
export default Dashboard;