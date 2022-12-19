import React, { Component } from "react";
import { getProductById, updateData } from "../services/Data";
import withRouter from "./withRouter";

class Editproduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      quantity: "",
      description: "",
      image: ""
    };
    this.handleSubmit1 = this.handleSubmit1.bind(this);
    this.handler = this.handler.bind(this);
  }

  handleSubmit1 = (e) => {
    e.preventDefault();
    updateData(this.props.params.id, this.state)
      .then((res) => {
        console.log(res);
        this.setState({
          name: res.data.name,
          price: res.data.price,
          quantity: res.data.quantity,
          description: res.data.description,
          image: res.data.image,
        });
        if (res.data) {
          this.props.navigate("/products");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handler = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    this.setState((prev) => ({ [name]: value }));
  };
  componentDidMount() {
    getProductById(this.props.params.id).then((res) => {
      console.log(this.props.params.id);
      this.setState({
        name: res.data.name,
        price: res.data.price,
        quantity: res.data.quantity,
        description: res.data.description,
        image: res.data.image,
      });
    });
  }
  render() {
    return (
      <div>
        <h4> Edit Data</h4>
        <form className="w-50" onSubmit={this.handleSubmit1}>
          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              required
              value={this.state.name || ""}
              onChange={this.handler}
            />
          </div>
          <br/>
          <div className="form-group">
            <label>Price</label>
            <input
              type="text"
              // pattern="/^[1-9]+$/"
              name="price"
              className="form-control"
              value={this.state.price}
              required
              onChange={this.handler}
            />
          </div>
          <br/>
          <div className="form-group">
            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              pattern="/^[0-9]+$/"
              className="form-control w-25"
              value={this.state.quantity}
              required
              onChange={this.handler}
            />
          </div>
          <br/>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              name="description"
              className="form-control"
              value={this.state.description}
              required
              onChange={this.handler}
            />
          </div><br/>
          <div className="form-group">
            <label>Image URL</label>
            <input
              type="text"
              name="image"
              className="form-control"
              value={this.state.image}
              required
              onChange={this.handler}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-success">
            Update Products
          </button>
        </form>
      </div>
    );
  }
}
export default withRouter(Editproduct);
