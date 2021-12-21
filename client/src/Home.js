import { useState, useEffect } from 'react';
import axios from 'axios';
import Result from './components/Result';

const BASE_URL = 'http://localhost:3001/api';

const Home = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searched, toggleSearched] = useState(false);

  const [trails, setTrails] = useState([]);

  useEffect(() => {
    skiTrails();
  }, []);

  const skiTrails = async () => {
    const res = await axios.get(`${BASE_URL}/getalltrails`);
    console.log(res);
    setTrails(res.data.trails);
    console.log(trails);
  };

  const handleInput = (e) => {
    setSearchQuery(e.target.value);
  };

  const getSearchResults = async (e) => {
    e.preventDefault();
    toggleSearched(true);
    setSearchQuery('');
  };

  return (
    <div>
      <div>
        <h2>Trails</h2>
        <section className="grid">
          {trails.map((e) => (
            <Result
              banana={skiTrails}
              key={e.name}
              name={e.name}
              image={e.image}
              area={e.area}
              difficulty={e.difficulty}
              details={e.details}
              {...e}
              // onClick={() => props.history.push(`/trail/${e._id}`)}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Home;
