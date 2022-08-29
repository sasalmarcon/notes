import React, { useContext} from 'react'
import { NoteContext } from '../../App';
import Empty from './Empty';
import NoteLists from './NoteLists';


export default function Notes() {
  const noteContext = useContext(NoteContext);
  return (
    <div className='grow'>
        {/* notes */}
        <>
           {noteContext.noteState.length === 0 ? <Empty/> : <NoteLists/>}
        </>
     
    </div>
  )
}
