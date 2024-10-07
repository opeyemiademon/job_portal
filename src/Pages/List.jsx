import React, { useEffect, useState } from 'react'

const List =({counter})=> {
const [item, setItem]=useState([])


useEffect(()=>{
    setItem(counter())

    console.log(' I just re render list')
}, [counter])
  return (
    <div>

{item.map((ls, index)=><p key={index}>
    {ls}
</p>)}


    </div>
  )
}

export default List