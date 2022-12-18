import React, { Component } from 'react'
import { postData } from '../services/Data';
import withRouter from './withRouter';
 class Addproduct extends Component {
    constructor(props){
        super(props);
        this.state={name:'',price:'', quantity:'',description:'', image:'' }
    }
    handler=(e)=>{
        let {name,value}=e.target;
        this.setState({[name]:value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        postData({name:this.state.name,price:this.state.price,quantity:this.state.quantity,description:this.state.description,image:this.state.image})
        .then(res=> {
            if(res.data){
                 this.props.navigate("/products");
              }
        })
        .catch(err=> console.log(err))
    }
  render() {
    return (
        <div>
        <h4 className='m-3 mb-2'> Add Data</h4>
        <form className='w-50' onSubmit={this.handleSubmit}>
            <p> * All fields are mandatory</p>
           <div className='form-group'>
               <label>Product Name</label>
               <input type="text" name="name" minLength={1} maxLength={25} className="form-control"  onChange={this.handler} required/>
           </div>
           <br/>
           <div className='form-group'>
               <label>Price</label>
               <input type="number" pattern="/^[0-9]+$/" name="price" className="form-control"onChange={this.handler} required/>
           </div>
           <br/>

           <div className='form-group w-25'>
               <label>Quantity</label>
               <input type="number" name="quantity" className="form-control"  onChange={this.handler} required/>
           </div>
           <br/>

           <div className='form-group'>
               <label>Description</label>
               <input type="text" name="description" className="form-control"onChange={this.handler} required/>
           </div>
           <br/>

           <div className='form-group'>
               <label>Image URL</label>
               <input type="text" name="image" className="form-control"onChange={this.handler} required/>
           </div>
            <br/>
           <input type="submit" value="Add" className="btn btn-success"/>
        </form>
   </div>
    )
  }
}
export default withRouter(Addproduct)