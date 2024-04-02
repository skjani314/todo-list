// reducers.js
//initial store data
const initialState = {
    data:[

{
    id:0,
    title:'Yoga',
    completed:false
},
{
    id:1,
    title:'Gym',
    completed:true
},
{
    id:2,
    title:'read',
    completed:true
}
    ],
    count:2
  };

  //reducer
  
  const reducer = (state = initialState, action) => {
    let newstate=[];
    switch (action.type) {

      case 'ADD':
        state.data.push(action.task)
       newstate ={
        ...state,
        count:state.count+1
       };
       break;
      case 'DELETE':
        newstate={
            ...state,
            data:state.data.filter(obj=>obj.id!==action.id)
        };
        break;
        case 'COMPLETE':
            newstate={
...state,
data:state.data.map(
task=>{
    return (task.id===action.id)
?{...task,completed:!task.completed}
:task
})
};break;
      default:
        newstate=state;
    }
    return newstate;
   
  };
  
  export default reducer;
  