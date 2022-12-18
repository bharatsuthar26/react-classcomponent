import React,{Component} from 'react';
import Mychildclass from './Mychildclass';
class Myclass extends Component{
    
    render(){
        return(<>
           <h2> {this.props.title} </h2>
           <p> My name is {this.props.fname}</p>
           <div>
             <h4> Courses</h4>
           <ul>
               {this.props.courses.map((data,index)=> 
                 <li key={index}> {data} </li>
               )}
            </ul>
            </div>
            <Mychildclass proData={this.props.proData}/>
        </>)
    }
}
export default Myclass;