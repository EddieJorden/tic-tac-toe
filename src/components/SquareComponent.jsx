import React, { useState }  from 'react';


const XButton = ({setXorO, XorO}) => {
    return(
    <div  style={{
        width: '80px', 
        height: '50px', 
        cursor: 'pointer',
        backgroundColor: 'red',
    }}
    
    >
        X
    </div>
    )
}

const OButton = ({setXorO, XorO}) => {
    return(
    <div  style={{
        width: '80px', 
        height: '50px', 
        cursor: 'pointer',
        backgroundColor: 'blue',
    }}
    >
        O
    </div>
    )
}

const EmptyButton = ({XorO, setXorO, setHasBeenClicked, setLocalXorO}) => {

    const handleClick = () => {
        setHasBeenClicked(true)
        {XorO === 'X' ? setXorO("O") : setXorO('X')}
        {XorO === 'X' ? setLocalXorO("O") : setLocalXorO('X')}
    }

    return(  <div  style={{
        width: '80px', 
        height: '50px', 
        cursor: 'pointer',
        backgroundColor: 'grey',
    }}
    onClick={handleClick}
    ></div>)
}

const SquareComponent = ({XorO, setXorO}) => {
    const [hasBeenClicked, setHasBeenClicked] = useState(false)
    const [localXorO, setLocalXorO] = useState(null)
    

    return(
        <div>
            {!hasBeenClicked && <EmptyButton setLocalXorO={setLocalXorO} setHasBeenClicked={setHasBeenClicked} XorO={XorO} setXorO={setXorO}/>}
            {hasBeenClicked && localXorO === 'X' && <XButton XorO={XorO} setXorO={setXorO}/>}
            {hasBeenClicked && localXorO === 'O' && <OButton XorO={XorO} setXorO={setXorO}/>}
        </div> 
 

        
        )
        
} 


      

export default SquareComponent;
                    
            
