import React from 'react'



const GifItem = ({item}) => {

    return (
        <div className='result'>
            <div className='result-title'>
                <h4>{item.title}</h4>
            </div>
            <img src={item.url} />
        </div>
    
  )
}

export default GifItem