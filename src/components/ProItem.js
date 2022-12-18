import React, { Component } from "react";

export default class ProItem extends Component {
  render() {
    return (
      <div className="col-md-3 mb-3">
        <div className="card">
          <img
            src={this.props.proData.description}
            width="200"
            height="250"
            className="card-img-top p-1"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.proData.name}</h5>
            <p className="card-text">{this.props.proData.price}</p>
            <button style={{ borderRadius: 5 }}>Add Cart</button>
          </div>
        </div>
      </div>
    );
  }
}
