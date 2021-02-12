import React, { useState }  from 'react';


const SquareComponent = () => {
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
            <SquareComponent 
                style={{
                    width: '80px', 
                    height: '50px', 
                    cursor: 'pointer',
                    text: 'empty space'
                }} 
                // onClick={setSquare('X')}
            />
                    
            
        </div>
    )
}

export default SquareComponent;