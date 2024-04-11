import { useEffect, useState } from "react"

const fetcheargifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Lo8MuR4oJMPBhUqZiquxkTjqYRCbqOjv&q=${category}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    const resp = await fetch(url)
    const {data} = await resp.json()
    const gifs = data.map((img, key) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.original.url    
        }
    })
    console.log(gifs)
    return gifs
}

export const getGifs =  (category) => {
    const [images, setImages] = useState([])

    const getImages = async () => {
        const gifs = await fetcheargifs(category)
        setImages(gifs);
    }
    useEffect(() => {
        getImages()
    }, [])
    return {
        images: images,
        loading: false
    }
}

