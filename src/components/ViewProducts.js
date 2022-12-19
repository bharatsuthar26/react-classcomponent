import React, { Component } from "react";
import { getProductById} from "../services/Data";
import withRouter from "./withRouter";

class ViewProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      quantity: "",
      description: "",
      image: ""
    };
    
  }
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
        
        <div className="row mt-5">
            <div className="col-sm-6">
            <img src={this.state.image} width={500} height={500} alt="..."/>
            </div>
            <div className="col-sm-6">
                <h3>Products Name: {this.state.name}</h3>
                <h4> Price : ₹ {this.state.price}</h4>
                <h4>Quantity: {this.state.quantity}</h4>
                <h4>Description: {this.state.description}</h4>
                </div>

        </div>
      </div>
    );
  }
}
export default withRouter(ViewProducts);
