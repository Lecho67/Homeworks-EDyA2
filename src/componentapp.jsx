

const ComponentApp = ({items}) => {

    return(
        <>
            <ol>
                {items.map((category, key) => {
                    return <li key={key}>{category}</li>
                })}
            </ol>
        </>
    )
        
}

export default ComponentApp