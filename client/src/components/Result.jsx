import React from 'react'

const Result = (props) => {

    return(
        <div>
            <h2>Results</h2>
            <div onClick={props.onClick}>
                <h2>{props.name}</h2>
                <img src={props.image} alt={props.name} />
            </div>
        </div>
    )
}

export default Result