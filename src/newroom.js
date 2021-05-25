import React,{Component} from 'react';
import axios from 'axios';
class Newroom extends Component{
    constructor(){
        super();
        this.state={
            category:[],
            roomno:'',
            roomcat:'',
            price:'',
            facility:'',
            message:''
        }
    }
    processRoomNo=(obj)=>{
        this.setState({
            roomno:obj.target.value
        })
    }
    processCategory=(obj)=>{
        this.setState({
            roomcat:obj.target.value
        })
    }
    processPrice=(obj)=>{
        this.setState({
            price:obj.target.value
        })
    }
    processFacility=(obj)=>{
        this.setState({
            facility:obj.target.value
        })
    }
    save=()=>{
        let url="https://www.firstenquiry.com/api/react/hotel/saveroom.php";
        let input=new FormData();
        input.append("hotelid",8792462607)
        input.append("a",this.state.roomno);
        input.append("b",this.state.roomcat);
        input.append("c",this.state.price);
        input.append("d",this.state.facility);

        axios.post(url,input).then(response=>{
            this.setState({
                     message:response.data,
                     roomno:'',
                     price:'',
                     facility:''
                 });
            
        })
    }
    getCategory=()=>{
        let url="https://www.firstenquiry.com/api/react/hotel/category.php";
        let input=new FormData();
        input.append("hotelid",8792462607)
        axios.post(url,input).then(response=>{
            if(response.data.length>0){
                 this.setState({
                     category:response.data
                 })
            }
        })
    }
    componentDidMount(){
        this.getCategory();
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="text-primary">Add New Room</h3>
                        <p className="text-danger">{this.state.message}</p>
                    </div>
                </div>
                <div className="row p-4 border mt-3 rounded">
                    <div className="col-md-4 form-group">
                        <label>Room No</label>
                        <input type="text" className="form-control" onChange={this.processRoomNo}
                        value={this.state.roomno}/>
                    </div>
                    <div className="col-md-4 form-group">
                        <label>Room Category</label>
                        <select className="form-control" onChange={this.processCategory}>
                            <option value="">Choose</option>
                            {
                                this.state.category.map((cat,index)=>{
                                    return<option key={index}value={cat.name}>{cat.name}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="col-md-4 form-group">
                        <label>Price For 24 hours</label>
                        <input type="text" className="form-control"
                        onChange={this.processPrice}
                        value={this.state.price}/>
                    </div>
                    <div className="col-md-12 form-group">
                        <label>Facility & Services</label>
                        <textarea className="form-control" onChange={this.processFacility}
                        value={this.state.facility}></textarea>

                    </div>
                    <div className="col-md-12 text-center">
                        <button className="btn btn-success text center" onClick={this.save}>Save Room</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Newroom;