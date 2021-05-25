import React, { Component } from "react";
import axios from "axios";
class Newbooking extends Component {
  constructor() {
    super();
    this.state = {
      category: [],
      roomlist: [],
      name: "",
      mobile: "",
      email: "",
      id: "",
      address: "",
      roomno: "",
      price: 0,
      days: 0,
      total: 0,
      paid: 0,
      due: 0,
      bookingStatus: "",
    };
  }

  getCategory = () => {
    let url = "https://www.firstenquiry.com/api/react/hotel/category.php";
    let input = new FormData();
    input.append("hotelid", 8792462607);
    axios.post(url, input).then((response) => {
      if (response.data.length > 0) {
        this.setState({
          category: response.data,
        });
      }
    });
  };
  processRoomType = (obj) => {
    this.getRoom(obj.target.value);
  };

  getRoom = (type = null) => {
    let url = "https://www.firstenquiry.com/api/react/hotel/availableroom.php";
    let input = new FormData();
    input.append("hotelid", 8792462607);
    input.append("type", type);
    axios.post(url, input).then((response) => {
      if (response.data.length > 0) {
        this.setState({
          roomlist: response.data,
        });
      }
    });
  };

  componentDidMount() {
    this.getCategory();
    this.getRoom();
  }

  processName = (obj) => {
    this.setState({
      name: obj.target.value,
    });
  };

  processMobile = (obj) => {
    this.setState({
      mobile: obj.target.value,
    });
  };

  processEmail = (obj) => {
    this.setState({
      email: obj.target.value,
    });
  };

  processId = (obj) => {
    this.setState({
      id: obj.target.value,
    });
  };

  processAddress = (obj) => {
    this.setState({
      address: obj.target.value,
    });
  };

  processRoom = (obj) => {
    this.setState({
      roomno: this.state.roomlist[obj.target.value].roomno,
      price: this.state.roomlist[obj.target.value].price,
      total: this.state.roomlist[obj.target.value].price * this.state.days,
      due:
        this.state.roomlist[obj.target.value].price * this.state.days -
        this.state.paid,
    });
  };

  processDays = (obj) => {
    this.setState({
      days: obj.target.value,
      total: this.state.price * obj.target.value,
      due: this.state.price * obj.target.value - this.state.paid,
    });
  };

  processPaid = (obj) => {
    if (obj.target.value <= this.state.total) {
      this.setState({
        paid: obj.target.value,
        due: this.state.total - obj.target.value,
      });
    } else {
      alert("Paid price can max or equal to total price");
      this.setState({
        paid: this.state.total,
        due: 0,
      });
    }
  };

  processDue = (obj) => {
    this.setState({
      due: obj.target.value,
    });
  };
  save = () => {
    let url = "https://www.firstenquiry.com/api/react/hotel/bookroom.php";
    let input = new FormData();
    input.append("hotelid", 8792462607);
    input.append("name", this.state.name);
    input.append("mobile", this.state.mobile);
    input.append("email", this.state.email);
    input.append("id", this.state.id);
    input.append("address", this.state.address);
    input.append("roomno", this.state.roomno);
    input.append("days", this.state.days);
    input.append("paid", this.state.paid);
    input.append("due", this.state.due);
    axios.post(url, input).then((response) => {
      this.setState({
        bookingStatus: response.data,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>New Booking</h2>
            <p className="text-danger">{this.state.bookingstatus}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h6 className="text-center">Customer Information</h6>
            <div className="border p-3">
              <div className="form-group row">
                <div className="col-md-3">Full Name</div>
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.processName}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-3">Mobile No</div>
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.processMobile}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-3">E-Mail</div>
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.processEmail}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-3">ID Proof</div>
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.processId}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-3">Address</div>
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.processAddress}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h6 className="text-center">Booking Information</h6>
            <div className="border p-3">
              <div className="form-group row">
                <div className="col-md-6">
                  <select
                    className="form-control"
                    onChange={this.processRoomType}
                  >
                    <option>Room Type</option>
                    {this.state.category.map((cat, index) => {
                      return (
                        <option key={index} value={cat.name}>
                          {cat.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-md-6">
                  <select className="form-control" onChange={this.processRoom}>
                    <option>Select Room</option>
                    {this.state.roomlist.map((myroom, index) => {
                      return (
                        <option key={index} value={index}>
                          {myroom.roomno}-{myroom.price}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-6">
                  <label>Total Days</label>
                  <select className="form-control" onChange={this.processDays}>
                    <option value="0">Choose Days</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label>Total Price</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly="readonly"
                    value={this.state.total}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label>Paid Amount</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.paid}
                    onChange={this.processPaid}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label>Due Amount</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.due}
                    onChange={this.processDue}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 text-center">
            <button className="btn btn-primary" onClick={this.save}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Newbooking;
