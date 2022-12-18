import React, { Component } from "react";
import { deleteData, getAllProducts } from "../services/Data";
export default class Mydata extends Component {
  constructor(props) {
    super(props);
    this.state = { proData: [] };
  }
  componentDidMount() {
    getAllProducts()
      .then((res) => {
        console.log(res.data);
        this.setState({ proData: res.data });
      })
      .catch((err) => console.log(err));
  }
  delPro = (id) => {
    if (window.confirm("Do you want to delete ?")) {
      deleteData(id).then((res) => {
        if (res.data) {
          alert("Product Deleted");
          let data = this.state.proData.filter((pro) => pro._id !== id);
          this.setState({ proData: data });
        }
      });
    }
  };
  render() {
    return (
      <div>
        <h2> Crud Implemention of Data</h2>
        <div className="row">
          {this.state.proData.map((pro) => (
            <div className="col-sm-3 mb-3" key={pro._id}>
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{pro.name}</h5>
                  <p className="card-text">{pro.price}</p>
                  <a href="/" className="btn btn-primary">
                    Edit
                  </a>
                  <button
                    className="btn btn-danger m-2"
                    onClick={() => this.delPro(pro._id)}
                  >
                    
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
