import React from 'React';



function Update() {
  return (

<div>


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
        <button>Update Post</button>
      </form>
      </div>
    )}

export default Update;