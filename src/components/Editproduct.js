import React, { Component } from 'react'
import { getProductById, updateData } from '../services/Data'
import withRouter from './withRouter'
import { toast } from "react-toastify";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 class Editproduct extends Component {
    constructor(props){
        super(props);
        this.state={name:'', price:'',qunatity:'', description:'', image:''}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handler = this.handler.bind(this);
      }
    
      handler = (e) => {
        let {name,value}= e.target;
        this.setState({[name]:value})
      }
      showSuccess = () => {
        console.log("button clicked");
        toast.success("Product Edited");
      };
    
      handleSubmit = (e) => {
        e.preventDefault();
        updateData(this.props.params.id, this.state)
          .then((res) => {
            this.setState({
              name: res.data.name,
              price: res.data.price,
              quantity: res.data.quantity,
              description: res.data.description,
              image: res.data.image,
            });
            if (res.data) {
              this.props.navigate("/getproducts");
            }
          })
          .catch((err) => console.log(err));
      };
    
    componentDidMount(){
        getProductById(this.props.params.id)
        .then(res=>{
            this.setState({name:res.data.name, price:res.data.price, quantity:res.data.quantity, description:res.data.description, image:res.data.image})
        })
    }
   
     
    
  render() {
    return (
      <div>
          <h4> Edit Data</h4>
        <form onSubmit={this.handleSubmit}>
           <div className='form-group'>
               <label>Product Name</label>
               <input type="text" name="name" className="form-control" value={this.state.name}  onChange={this.handler}/>
           </div>
           <div className='form-group'>
               <label>Price</label>
               <input type="number" name="price" className="form-control" value={this.state.price} onChange={this.handler}/>
           </div>
           <div className='form-group'>
               <label>Quantity</label>
               <input type="number" name="quantity" className="form-control" value={this.state.quantity}  onChange={this.handler}/>
           </div>
           <div className='form-group'>
               <label>Description</label>
               <input type="text" name="description" className="form-control" value={this.state.description} onChange={this.handler}/>
           </div> <div className='form-group'>
               <label>Image URL</label>
               <input type="text" name="image" className="form-control" value={this.state.image}  onChange={this.handler}/>
           </div>
          
            <br/>
           <input type="submit" onClick={this.showSuccess} value="Update" className="btn btn-success"/>
        </form>
      </div>
    )
  }
}
export default withRouter(Editproduct)
