import React, { Component } from "react";
import axios from "axios";
class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookinginfo: [],
      message: "",
    };
  }

  getData = (bookingid = null) => {
    let input = new FormData();
    if (bookingid == null) {
      input.append("bookingid", this.props.userid);
    } else {
      input.append("bookingid", bookingid);
    }
    let url = "https://www.firstenquiry.com/api/react/hotel/bookinginfo.php";
    axios.post(url, input).then((response) => {
      this.setState({
        bookinginfo: response.data,
      });
    });
  };

  updateBooking = () => {
    let input = new FormData();
    input.append("bookingid", this.state.bookinginfo.bookingid);
    input.append("total", this.state.bookinginfo.total);
    input.append("roomno", this.state.bookinginfo.roomno);
    let url = "https://www.firstenquiry.com/api/react/hotel/updatebooking.php";
    axios.post(url, input).then((response) => {
      this.setState({
        message: response.data,
      });
      this.getData(this.state.bookinginfo.bookingid);
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    if (this.state.bookinginfo.id) {
      return (
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-10 border p-2 rounded">
              <h3 className="text-center">Customer Billing</h3>
              <p className="text-center text-success"> {this.state.message} </p>
              <div className="row mt-3">
                <div className="col-md-4">
                  Name : {this.state.bookinginfo.name}
                </div>
                <div className="col-md-4">
                  Mobile : {this.state.bookinginfo.mobile}
                </div>
                <div className="col-md-4">
                  E-Mail : {this.state.bookinginfo.email}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-4">
                  Address : {this.state.bookinginfo.address}
                </div>
                <div className="col-md-4">
                  Id Proof : {this.state.bookinginfo.id}
                </div>
                <div className="col-md-4">
                  Room No : {this.state.bookinginfo.roomno}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-2">
                  No of days :{this.state.bookinginfo.days}
                </div>
                <div className="col-md-6">
                  Booking Date : {this.state.bookinginfo.bookingdate}{" "}
                </div>
                <div className="col-md-2">
                  Paid : {this.state.bookinginfo.paid}
                </div>
                <div className="col-md-2">
                  Due : {this.state.bookinginfo.due}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12 text-center">
                  <button
                    className="btn btn-primary"
                    onClick={this.updateBooking}
                  >
                    Pay & Exit{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      );
    } else {
      return (
        <h2 className="text-center text-warning">Please Wait Processing...</h2>
      );
    }
  }
}
export default Info;
