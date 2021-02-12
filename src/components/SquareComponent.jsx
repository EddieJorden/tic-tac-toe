import React, { useState }  from 'react';


const SquareComponent = ({text}) => {
    const [square, setSquare] = useState('')

    const placeX = 'X'
        // setSquare(() => placeX)
    

    // const placeO = () => {
    //     setSquare(() => placeO)
    // }

    // const playerAClick = (e) => {
    //     placeX()
    // }

    // const playerBClick = (e) => {
    //     placeO()
    // }


    return (
        <div>
            <div>tic tac toe space

            </div>
            <button
                style={{
                    width: '80px', 
                    height: '50px', 
                    cursor: 'pointer',
                }}
                text= 'empty space' 
                // onClick={setSquare('X')}
                >
            </button>
                    
            
        </div>
    )
}

export default SquareComponent;
                    
            