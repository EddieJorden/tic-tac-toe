import React, { useState }  from 'react';


const SquareComponent = ({value, onClick}) => {
 
    


    return (
      
            <button
                style={{
                    width: '80px', 
                    height: '50px', 
                    cursor: 'pointer',
                }}
                onClick={onClick}
                
                
                >
                    {value}
            </button>
                    
    )
}

export default SquareComponent;
                    
            