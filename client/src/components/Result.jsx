import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';




function Result(props) {
const [rem,setRem] = useState()
async function deletePost (id) {
    await axios.delete(`http://localhost:3001/api/getalltrails/${id}`)
    setRem('Trail Removed')
    window.location.reload()
}
useEffect(()=> {
    props.setCurrentTrail(props._id)
    props.setCurrentPost(props._id)
},
[props.clicker]
)
    return(
        <div>
            
            <div onClick={props.onClick}>
                <h2>{props.name}</h2>
                <img src={props.image} alt={props.name} />
                <p>Location: {props.area}</p>
                <p>Difficulty: {props.difficulty}</p>
                <p>About: {props.details}</p>
                <Link to ={`/updatetrails/${props._id}`}><button>Update Post</button> </Link>
                <button onClick={()=> {deletePost(props._id)}}>Delete Post</button>

            </div>
        </div>
    )
}

export default Result;
    