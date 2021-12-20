import React from 'react'

const Result = (props) => {

    return(
        <div>
            
            <div onClick={props.onClick}>
                <h2>{props.name}</h2>
                <img src={props.image} alt={props.name} />
                <p>Location: {props.area}</p>
                <p>Difficulty: {props.difficulty}</p>
                <p>About: {props.details}</p><button>Update Post</button><button>Delete Post</button>

            </div>
        </div>
    )
}

export default Result
    