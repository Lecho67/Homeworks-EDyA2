import GifItem from "./GifItem";
import {getGifs} from "./Hooks/getGifs";



const GiftGrid = ({category}) => {
    const {images, loading} = getGifs(category)
    return(
        <>
            <h1>{category}</h1>
            <div className="searchContainer">
                {images.map((image, key) => {
                    return <GifItem item={image}key={key}/>
                })}
            </div>
        </>
    )
        
}

export default GiftGrid