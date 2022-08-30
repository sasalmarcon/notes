import React , {useContext} from 'react';
import {Link} from 'react-router-dom';
import { NoteContext } from '../../App';
import ReactMarkdown from 'react-markdown';
import { nanoid } from 'nanoid';



export default function NoteLists() {
    const noteContext = useContext(NoteContext);

    function handleDelete(e,index){
       noteContext.noteDispatch({type:'DELETE_NOTE',
       value:{index:index}})
    }

    const notes = noteContext.noteState.map(note =>{
        return (
           
            <div key = {nanoid()} className='break-words  px-2 py-2 border border-gray-300 flex flex-col justify-between shadow-lg rounded  w-2/3 h-60 mx-2 my-2 '>
            {/* note */}
            <div className='overflow-y-hidden'>
                <p className='px-4 text-center'>
                <ReactMarkdown>
                     {note.text}
                </ReactMarkdown>
                </p>
            </div>

              {/* date and time */}
              <div className= 'flex items-center justify-around'>
                <p className='mx-2 px-2 text-gray-400'>{note.date}</p>
                {/* buttons */}
                <button onClick = {(e)=>{
                    handleDelete(e,noteContext.noteState.indexOf(note));
                }}>
                <img className='w-6' src="https://img.icons8.com/ios-glyphs/90/FA5252/filled-trash.png" alt =""/></button>
                {/* Edit link */}
                <Link to = {`/edit/${noteContext.noteState.indexOf(note)}`}>
                <img className='w-6' src="https://img.icons8.com/ios-glyphs/90/1A1A1A/edit--v1.png" alt =""/>
                </Link>
             </div>
    
      </div>
     
        )
    })
  return (
    <div>
         {/* add link*/}
         <Link to = "/add">
         <div className='shadow-lg cursor-pointer bg-yellow-200 rounded-full flex items-center justify-center w-16 h-16 mx-2 my-2 fixed bottom-5 right-2 z-10'>
         <img className = "h-10 lex items-center justify-center" src="https://img.icons8.com/office/80/000000/pencil-tip.png" alt = ""/>
        </div></Link>
        {notes}
    </div>
  )
}
