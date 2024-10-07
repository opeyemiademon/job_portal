import React, { useCallback, useState } from 'react'
import Items from './Items'

const CountItem =()=> {
    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false)


    const counter =useCallback(()=>{

        return [number, number+1, number+2]
    }, [number])

    const theme = {
        backgroundColor:dark ?'#333':'#fff',
        color: dark ?'#fff':'#333'
    }

      
    //this is for usememo
    const slowfunction =(num)=>{
        console.log('This function is very slow')
        for(let i=0; i<=10000000000; i++)
                return num *2;
        
            }
let doublenumber = slowfunction(number)
   
  return (
    <div style={theme}>


        <input type="number" 
        className='form-control'
        onChange={(e)=>setNumber(parseInt(e.target.value))}
        />

        <button onClick={()=>setDark(!dark)} className='btn btn-primary' type='button'> Change Color</button>    
        <Items counter ={counter} />
    </div>
  )
}

export default CountItem