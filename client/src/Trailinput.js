import React, { useState, useEffect } from 'react';
import TrailArray from './data/trails';
import axios from 'axios';
const BASE_URL = 'http://localhost:3001/api';

const FormInput = (props) => {
  const [data, setData] = useState(TrailArray);
  const [Trails, setTrail] = useState(data);
  const [newTrail, setNewTrail] = useState({
    name: '',
    image: '',
    area: '',
    difficulty: '',
    details: ''
  });

  const allTrails = async () => {
    const res = await axios.post(`${BASE_URL}/createtrails`, newTrail);
    setData(res.data.trails);
    console.log(data);
  };

  const addTrail = (e) => {
    e.preventDefault();
    const currentTrail = Trails;
    const newestTrail = newTrail;
    currentTrail.push(newestTrail);
    setTrail(currentTrail);
    setNewTrail({
      name: '',
      image: '',
      area: '',
      difficulty: '',
      details: ''
    });
  };

  const handleChange = (e) => {
    setNewTrail({
      ...newTrail,
      [e.target.name]: e.target.value
    });
  };

  const formSubmit = (e) => {
    addTrail(e);
    allTrails();

    console.log(newTrail);
  };

  return (
    <div>
      <h1>Add New Trail</h1>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          value={newTrail.name}
          onChange={handleChange}
          name={'name'}
          placeholder={'Trail Name'}
        />
        <input
          type="text"
          value={newTrail.img}
          onChange={handleChange}
          name={'image'}
          placeholder={'image'}
        />
        <input
          type="text"
          value={newTrail.area}
          onChange={handleChange}
          name={'area'}
          placeholder={'Location'}
        />
        <input
          type="text"
          value={newTrail.difficulty}
          onChange={handleChange}
          name={'difficulty'}
          placeholder={'difficulty'}
        />
        <input
          type="text"
          value={newTrail.details}
          onChange={handleChange}
          name={'details'}
          placeholder={'descirption'}
        />
        <button>Create Post</button>
        <button>Update Post</button>
      </form>
    </div>
  );
};
export default FormInput;
