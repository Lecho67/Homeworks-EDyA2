const categories = [
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
]

const ComponentApp = () => {

    return(
        <>
            <ol>
                {categories.map((category, key) => {
                    return <li key={key}>{category}</li>
                })}
            </ol>
        </>
    )
        
}

export default ComponentApp