import {React} from 'react';
import Header from './components/Header/Header.js';
import Post from './components/post/post.js';
import TaskList  from './components/TaskList/TaskList.js';
import './App.css';
import {connect} from 'react-redux';

function App(props) {
{/*creating posts/tasks list*/}
  const posts=props.data.map((each)=>{
        return <Post  id={each.id} title={each.title} completed={each.completed} delete={props.delete} complete={props.complete}></Post>
  });
  return (
  <div className='bg container'>
  <Header add={props.add} count={props.count}></Header>
  <TaskList></TaskList>
  {posts}
  </div>

  );
}

{/* dispatcher and state data*/}
const mapStateToProps = (state) => {
  return {
    data: state.data,
    count:state.count// Assuming you have a 'count' state in your Redux store
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (task) => dispatch({ type: 'ADD',task:task }), // Assuming you have an 'INCREMENT' action
    delete: (id) => dispatch({ type: 'DELETE',id:id }),
    complete:(id)=>dispatch({type:'COMPLETE',id:id})  // Assuming you have a 'DECREMENT' action
  };
};

{/* connecting dispatchers and state*/}

export default connect(mapStateToProps,mapDispatchToProps)(App);
