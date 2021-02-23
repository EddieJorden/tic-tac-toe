import React, { useState } from 'react'
import SquareComponent from './SquareComponent'



const PlayingField = () => {

    const [XorO, setXorO] = useState('O')
    console.log(XorO)
    

    

return(
    <div className='PlayingField' style={{display: 'flex', flexWrap: 'wrap'}}>
      <SquareComponent XorO={XorO} setXorO={setXorO} />
      <SquareComponent XorO={XorO} setXorO={setXorO} />
      <SquareComponent XorO={XorO} setXorO={setXorO} />
      <SquareComponent XorO={XorO} setXorO={setXorO} />
      <SquareComponent XorO={XorO} setXorO={setXorO} />
      <SquareComponent XorO={XorO} setXorO={setXorO} />
      <SquareComponent XorO={XorO} setXorO={setXorO} />
      <SquareComponent XorO={XorO} setXorO={setXorO} />
      <SquareComponent XorO={XorO} setXorO={setXorO} />    
    </div>
)}



export default PlayingField;