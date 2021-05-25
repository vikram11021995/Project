import React , {useState , useEffect} from 'react';
import {useParams , Link} from 'react-router-dom';
import axios from 'axios';

const Room = () =>{

    const{type} = useParams();
    const[catlist, updateCategory] = useState([]);
    const getCategory = () =>{
        let url = "https://www.firstenquiry.com/api/react/hotel/category.php";
        let input = new FormData();
        input.append("hotelid", 8792462607);
        axios.post(url , input).then(response=>{
            if(response.data.length>0){
                updateCategory(response.data);
            }
        })
    }
    useEffect(()=>{
        getCategory();
        getRoom();
    }, [true]);

    const[roomlist , updateRoom] = useState([]);
    const getRoom = (category=null, roomtype='available') =>{
        let url = "https://www.firstenquiry.com/api/react/hotel/room.php";
        let input = new FormData();
        input.append("hotelid", 8792462607);
        input.append("type", roomtype);
        input.append("category", category);
        axios.post(url , input).then(response=>{
            if(response.data.length>0){
                updateRoom(response.data);
            }
        })
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-right">
                    <div className="btn-group">
                        <Link to="/available/room" className="btn btn-info btn-sm" onClick={getRoom.bind(this, null, 'available')}>Available Rooms</Link>
                        <Link to="/booked/room" className="btn btn-danger btn-sm" onClick={getRoom.bind(this, null, 'booked')}>Booked Rooms</Link>
                        <Link to="/allroom/room" className="btn btn-secondary btn-sm" onClick={getRoom.bind(this, null, 'allroom')}>Total Rooms</Link>
                    </div>
                </div>
            </div>
            <div className="row mt-2">
                {
                    catlist.map((xcat , index)=>{
                        return (
                                <div className="col-md-2 text-center" key={index}>
                                    <p className="p-2">
        <label className="badge badge-primary p-2" onClick={getRoom.bind(this, xcat.name, type)}>{xcat.name}</label>
                                    </p>  
                                </div>
                               )
                    })
                }
            </div>

            <div className="row">
                <div className="col-md-12">
                    <p className="text-danger text-center">  {roomlist.length} -: Rooms Found </p>
                    <table class="table table-bordered table-sm">
                        <thead>
                            <tr className="bg-light text-primary text-center">
                                <td>Room No</td>
                                <td>Category</td>
                                <td>Price/Day</td>
                                <td>Facility</td>
                                <td>Available</td>
                                <td>Booked By</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                roomlist.map((xroom , index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{xroom.roomno}</td>
                                            <td>{xroom.category}</td>
                                            <td>{xroom.price}</td>
                                            <td>{xroom.facility}</td>
                                            <td>{xroom.available}</td>
                                            <td><Link to={`/${xroom.bookingid}/billing`}>{xroom.bookedby}</Link></td>   
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>   
            </div>
        </div>
    )
}
export default Room;