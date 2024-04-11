import CategorieInput from "./CategorieInput";
import AddCategories from "./AddCategories";
import { useState } from "react"; 
import "./index.css"
import "./App.css"
import GiftGrid from "./GiftGrid";



function App () {

    const [categories, setCategories] = useState([])
    const [NewCategory, setNewCategory] = useState("")	
    
    const handleChange = (value) => {
        setNewCategory(value);
    }
    const handleClick = () => {
        setCategories([...categories, NewCategory])
    }
    return (
        <>
            <CategorieInput handleChange = {handleChange}/>
            <AddCategories handleClick = {handleClick}/>
            {categories.map(category => <GiftGrid category={category}/>)}   
        </>
    )
}

export default App
