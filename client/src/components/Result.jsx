import React from 'react'
import { Link } from 'react-router-dom';
const Result = (props) => {
function deletePost () {
    console.log('Post deleted')
}




    return(
        <div>
            
            <div onClick={props.onClick}>
                <h2>{props.name}</h2>
                <img src={props.image} alt={props.name} />
                <p>Location: {props.area}</p>
                <p>Difficulty: {props.difficulty}</p>
                <p>About: {props.details}</p>
                <Link to ='/update'><button>Update Post</button> </Link>
                <button onClick={deletePost}>Delete Post</button>

            </div>
        </div>
    )
}

export default Result
    