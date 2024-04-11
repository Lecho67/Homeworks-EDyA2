import ComponentApp from "./componentapp";
import CategorieInput from "./CategorieInput";
import AddCategories from "./AddCategories";
import { useState } from "react"; 



function App () {

    const [categories, setCategories] = useState([
        "Action",
        "Comedy",
        "Horror",
        "Romance",
        "Thriller",
        "Drama",
        "Fantasy",
        "Science Fiction",
        "Mystery",
        "Historical",
        "War",
        "Western",
        "Documentary",
        "Animation",
        "Adventure",
    ])
    const [NewCategory, setNewCategory] = useState("")	
    
    const handleChange = (value) => {
        setNewCategory(value);
    }
    const handleClick = () => {
        setCategories([...categories, NewCategory])
    }
    return (
        <>
            <ComponentApp items = {categories}/>
            <CategorieInput handleChange = {handleChange}/>
            <AddCategories handleClick = {handleClick}/>
        </>
    )
}

export default App
