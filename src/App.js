import React, { useReducer } from 'react'
import {Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Notes from './components/notelist/Notes';
import AddNotes from './components/notelist/AddNotes';
import EditNote from './components/notelist/EditNote';

const initialState = [];

export const NoteContext = React.createContext();

const reducer = (state,action)=>{
  switch(action.type)
  {
    case 'ADD_NOTE':
      return [...state,action.value];
    case 'DELETE_NOTE':
      return [...state.slice(0,action.value.index),...state.slice(action.value.index+1)];
    case 'EDIT_NOTE':
      return [...state.slice(0,action.value.index),{text:action.value.text,date:action.value.date},...state.slice(action.value.index + 1)]
    default:
      return state;
  }
}

function App() {
  const [notes,dispatch] = useReducer(reducer,initialState);
  return (
    <NoteContext.Provider value = {{noteState:notes,noteDispatch:dispatch}}>
         <div className="">
      <Routes>
            <Route path = "/" element = {<Layout/>}>
              <Route index element = {<Notes/>}/>
              <Route path = "/add" element = {<AddNotes/>}/>
              <Route path = "/edit/:id" element = {<EditNote/>}/>
            </Route>
            <Route path = "*" element = {<h1>Error 404 </h1>}/>
        </Routes>
    </div>
    </NoteContext.Provider>
   
  );
}

export default App;
 