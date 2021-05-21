import React, {useState} from 'react';
import './App.css';
import {DragDropContext} from "react-beautiful-dnd";
import {lodash}

const item = {
  id: "123abc",
  name: "Do job One"
}
function App() {
  const [state, setState] = useState{initialState{
    "todo":{
      title:"Things todo",
      items: []
    },
    "in-progress": {
      title: "Completed",
      items: []
    }
  }}
  return (
    <div className="App">
      <DragDropContext onDragEnd={e=>console.log(e)}>
        {_.map(state, (data, key)=>{
          return(
            <Droppable>
            {(provided=>{
              return(
            
                )
            }}
            </Droppable>
          )
        })}
      
      </DragDropContext>    
       test
    </div>
  );
}

export default App;
