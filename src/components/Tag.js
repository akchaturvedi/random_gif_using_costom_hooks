
import Spinner from './Spinner';
import React, { useState } from 'react'
import useGif from '../hooks/useGif'
const Tag = () => {
    const [tag, settag] = useState("");
    const {gif, loading, fetchData} = useGif(tag);
    
  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>
       
       <h1 className='mt-[15px] text-2xl underline uppercase font-bold'> A Random {tag} Gif</h1>

            {
            loading?
            (<Spinner/>
            ):
            (<img src={gif} width="450" alt='random-meme'/>) 
            }

            <input 
            className='w-10/12 text-lg py-2 rounded-lg mb-[6px] text-center'
            onChange={(event)=> settag(event.target.value)}
            value={tag}
            placeholder='Enter the text you want the gif for...'
            />

            <button onClick={() => fetchData(tag)}
                className="w-10/12 bg-yellow-300 text-lg py-2 rounded-lg mb-[20px]">
                Generate
                </button>
    </div>
  )
}

export default Tag