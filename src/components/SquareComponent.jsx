import React  from 'react';

const SquareComponent = () => {
    // const [square, setSquare] = useState(false)

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
            <button style={{width: '80px', height: '50px', cursor: 'pointer'}}>{placeX}</button>
        </div>
    )
}

export default SquareComponent;