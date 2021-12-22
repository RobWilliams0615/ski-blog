import React, { useState, useEffect } from 'react';
import TrailArray from '../data/trails'
import axios from 'axios'
const BASE_URL = 'http://localhost:3001/api'

const Update = (props) => {
  const [data, setData] = useState(TrailArray);
  const [Trails, setTrail] = useState(data);
  const [updatedTrail, setUpdatedTrail] = useState({
    name: '',
    image: '',
    area: '',
    difficulty: '',
    details: ''
  });



  const updateTrails = async (id) => {
    console.log(id)
    const res = await axios.put(`${BASE_URL}/updatetrails/${id}`, updatedTrail);
    setData(res.data.trails);
    console.log(res.data);
  };

  const updateTrail = (e) => {
    e.preventDefault();
    const currentTrail = Trails;
    const changedTrail = updatedTrail;
    currentTrail.push(changedTrail);
    setTrail(currentTrail);
    setUpdatedTrail({
      name: '',
      image: '',
      area: '',
      difficulty: '',
      details: ''
    });
  };
const handleChange = (e) => {
  setUpdatedTrail({
    ...updatedTrail,
    [e.target.name]: e.target.value
  });
};

const formSubmit = (e) => {
  updateTrail(e);
  updateTrails(props.match.params.id);
  console.log(e)

  console.log(updatedTrail);
};

return (
<div>
<h2>Update Trail</h2>

<form onSubmit={formSubmit}>
        <input
          type="text"
          value={updatedTrail.name}
          onChange={handleChange}
          name={'name'}
          placeholder={'Trail Name'}
        />
        <input
          type="text"
          value={updatedTrail.img}
          onChange={handleChange}
          name={'image'}
          placeholder={'image'}
        />
        <input
          type="text"
          value={updatedTrail.area}
          onChange={handleChange}
          name={'area'}
          placeholder={'Location'}
        />
        <input
          type="text"
          value={updatedTrail.difficulty}
          onChange={handleChange}
          name={'difficulty'}
          placeholder={'difficulty'}
        />
        <input
          type="text"
          value={updatedTrail.details}
          onChange={handleChange}
          name={'details'}
          placeholder={'descirption'}
        />
        <button>Update Post</button>
      </form>
      </div>
    )
  }

export default Update;