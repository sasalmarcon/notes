import React, { useReducer } from 'react'
import {Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Notes from './components/notelist/Notes';
import AddNotes from './components/notelist/AddNotes';

const initialState = [];

export const NoteContext = React.createContext();

const reducer = (state,action)=>{
  switch(action.type)
  {
    case 'ADD_NOTE':
      return [...state,action.value];
    default:
      return state;
  }
}

function App() {
  const [notes,dispatch] = useReducer(reducer,initialState);
  console.log(notes)
  return (
    <NoteContext.Provider value = {{noteState:notes,noteDispatch:dispatch}}>
         <div className="">
      <Routes>
            <Route path = "/" element = {<Layout/>}>
              <Route index element = {<Notes/>}/>
              <Route path = "/add" element = {<AddNotes/>}/>
            </Route>
        </Routes>
    </div>
    </NoteContext.Provider>
   
  );
}

export default App;
 