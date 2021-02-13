import React, { useState }  from 'react';


const SquareComponent = ({value, onClick}) => {
    const style = value ? 'squares ${value}' : 'squares';
    


    return (
      
            <button
                style={{
                    width: '80px', 
                    height: '50px', 
                    cursor: 'pointer',
                }}
                onClick={onClick}
                className={style}
                
                >
                    {value}
            </button>
                    
    )
}

export default SquareComponent;
                    
            