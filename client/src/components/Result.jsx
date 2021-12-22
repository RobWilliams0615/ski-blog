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
    console.log(props)
    if (props.ispost === true) {
        props.setCurrentPost(props._id)
    } else {
        props.setCurrentTrail(props._id)
    }
},
[props.clicker]
)
    
const checkData = () => {
    if (props.ispost === true) {
        return (
        <div onClick={props.onClick}>
                <h2>{props.username}</h2>
                <p>Postinfo: {props.postinfo}</p>
                <p>Rating: {props.rating}</p>
                <Link to ={`/updatetrails/${props._id}`}><button>Update Post</button> </Link>
                <button onClick={()=> {deletePost(props._id)}}>Delete Post</button>
            </div> )
    } else {
        return (
        <div onClick={props.onClick}>
                <h2>{props.name}</h2>
                <img src={props.image} alt={props.name} />
                <p>Location: {props.area}</p>
                <p>Difficulty: {props.difficulty}</p>
                <p>About: {props.details}</p>
                <Link to ={`/updatetrails/${props._id}`}><button>Update Post</button> </Link>
                <button onClick={()=> {deletePost(props._id)}}>Delete Post</button>
            </div> )
    }
}


return(
        <div>
            {checkData()}
        </div>
    )
}

export default Result;
    
