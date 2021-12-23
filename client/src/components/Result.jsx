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
        <div className="comments"onClick={props.onClick}>
                <h3>{props.username}</h3>
                <p>{props.postinfo}</p>
                <h5>Rating: {props.rating}</h5>
                <Link to ={`/updatetrails/${props._id}`}><button>Update Post</button> </Link>
                <button onClick={()=> {deletePost(props._id)}}>Delete Post</button>
            </div> )
    } else {
        return (
        <div onClick={props.onClick}>
                <h2 className="trailtitle">{props.name}</h2>
                <img src={props.image} alt={props.name} />
                <h5 className="location">Location: {props.area}</h5>
                <h5 className="difficulty">Difficulty: {props.difficulty}</h5>
                <p className="traildetails">About: {props.details}</p>
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
    
