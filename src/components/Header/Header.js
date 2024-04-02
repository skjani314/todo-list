import {React} from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header(props)
{

return(

<>
<div className='row title'>
To-Do List
</div>
<div className='row'>
<form className='form-group'>
<div className='col-md-2'></div>
<div className="form-group add col-md-5 col-xs-12">
<input id='dat' type="text" className="form-control" placeholder="Whats Your Next Task"></input>
</div>
<div className="form-group col-md-5 pull-left co-xs-12">

    {/* adding data to store */}
<button className="btn btn-success" onClick={(e)=>
    {
        e.preventDefault();
let x=document.getElementById('dat');
let y=x.value;     
{/* giving id for new task by increamenting existing tasks count where count begins from 0 */} 
let data={
    id:props.count+1,
    title:y,
    completed:false
};
x.value='';
        props.add(data);  {/* calling dispatcher function for adding data*/}
    }
    }>ADD</button>
</div>
</form>


</div>







</>



);

}
export default Header;