import React,{Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons'; 
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './Post.css';

export default class Post extends Component{

constructor(props){
super(props);
this.props=props;
}

render(){
    {/* changing icon, task check/uncheck based on click*/}
    var x=faCircle;
    if(this.props.completed===true){x=faCheckCircle;}
    else{
        x=faCircle;
    }
return(

<>

<div className='row post'>
<div className='col-md-1 col-xs-2'>
    
    <FontAwesomeIcon icon={x} className='ic-circle' onClick={()=>{this.props.complete(this.props.id)}}/>{/*calling complete dispatcher to toggle complete or uncomplete of task */}
    
    
</div>
<div className='col-md-8 pull-left col-xs-8'>{this.props.title}</div>
<div className='col-md-2 col-xs-2'><FontAwesomeIcon icon={faTrash} className='ic-trash' onClick={()=>{this.props.delete(this.props.id)}}/></div>{/* calling delete dispatcher*/}
<hr className='p-line'></hr>
</div>


</>


);

}

}

