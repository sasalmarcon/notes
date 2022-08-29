import React , {useContext} from 'react';
import {Link} from 'react-router-dom';
import { NoteContext } from '../../App';
import ReactMarkdown from 'react-markdown';
import { nanoid } from 'nanoid';



export default function NoteLists() {
    const noteContext = useContext(NoteContext);

    const notes = noteContext.noteState.map(note =>{
        console.log(note.date)
        return (
           
            <div key = {nanoid()} className='border border-gray-300 flex flex-col justify-between  shadow-lg rounded  w-1/2 h-40 mx-2 my-2 overflow-hidden '>
            {/* note */}
            <div className=''>
                <pre className='px-4'>
                <ReactMarkdown>
                     {note.text}
                </ReactMarkdown>
                </pre>
              
                
            </div>

              {/* date and time */}
              <div className= ''>
                <p className='mx-2 px-2 text-gray-400'>{note.date}</p>
            </div>
      </div>
     
        )
    })
  return (
    <div>
         {/* add link*/}
         <Link to = "/add">
         <div className='shadow-lg cursor-pointer bg-yellow-200 rounded-full flex items-center justify-center w-16 h-16 mx-2 my-2 fixed bottom-5 right-2 z-10'>
         <img className = "h-10" src="https://img.icons8.com/office/80/000000/pencil-tip.png" alt = ""/>
        </div></Link>
        {notes}
    </div>
  )
}
