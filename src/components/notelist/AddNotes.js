import React, { useState ,useContext } from 'react'
import { Link, useNavigate} from 'react-router-dom';
import { NoteContext } from '../../App';


const instruction = '# Title , *italic* ,**bold**';

export default function AddNotes() {
  const navigate = useNavigate();
  const noteContext = useContext(NoteContext);
  const [input,setInput] = useState('');
  const [error,setError] = useState(null)

  console.log(input);
 
  function handleChange(e)
  {
    setInput(e.target.value);
    if(input.length > 0)
    {
        setError(null);
    }
  }

  function handleSubmit(e)
  {
    e.preventDefault();

    if(input === '')
    {
        return setError('Write Something!');
    }
    const submitDate = getDate();
        noteContext.noteDispatch({type:'ADD_NOTE',value:{
            text:input,
            date:submitDate
        }
    })

    navigate('/');
  }

  function getDate()
  {
    const days = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];
        const months = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec']
        const d = new Date();
        const date = d.getDate();
        const month = d.getMonth();
        const year = d.getYear();
        const day = d.getDay();
        return `${date} ${days[day]} ${months[month]} ${year}`;
  }


  return (
    
    <form onSubmit={handleSubmit} className='flex flex-col justify-start items-center grow '>
        {error && <p className='text-xl font-semibold text-red-500'>{error}</p>}
        <p className='text-2xl text-gray-600 my-2 '>Add notes</p>
    <textarea 
     placeholder= {instruction}
     onChange={handleChange}
     className='border border-gray-600 w-11/12 h-2/3 my-2  px-2 py-2 text-2xl'>
    </textarea>
    <Link to = "/" >
    <p className='z-10 absolute bottom-5 left-5 text-6xl text-gray-200 rounded-full w-20 h-20 flex justify-center items-center bg-yellow-500'>
    ←
     </p>
    </Link>
      <button type = "submit" className='z-10 absolute bottom-5 right-5 text-6xl text-gray-200 rounded-full w-20 h-20 flex justify-center items-center bg-green-500'>+</button>
    </form>
    

  )
}
