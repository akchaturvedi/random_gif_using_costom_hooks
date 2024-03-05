import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react'

const useGif = (tag) => {
    const[gif, setgif]= useState("");
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    
    const [loading, setloading] = useState(false)
    
    async function fetchData(tag){
        setloading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const{data} = await axios.get(tag? `${url}&tag=${tag}`: url);
        console.log('Data is', data)
        const imageSource = data.data.images.downsized_large.url;
        console.log('Image source is', imageSource)
        setgif(imageSource);
        setloading(false);
    }
    
    useEffect(() => {
        fetchData();
    }, [])
    
    return {gif, loading, fetchData};
}

export default useGif



