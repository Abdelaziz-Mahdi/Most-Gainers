import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  selectGainers, selectGainersLoading, selectGainersError,
} from '../redux/gainersSlice';
import '../styles/Home.css';
import imgSmg from '../assets/smg.jpg';

export default function Home() {
  const gainers = useSelector(selectGainers);
  const gainersLoading = useSelector(selectGainersLoading);
  const gainersError = useSelector(selectGainersError);
  let content;
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState(gainers);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    const results = gainers.filter((gainer) => gainer.name.toLowerCase().includes(searchTerm));
    setSearchResults(results);
  }, [searchTerm, gainers]);

  if (gainersLoading) {
    content = <div className="spinner-border text-success" role="status" />;
  } else if (gainersError) {
    content = <div className="alert alert-danger" role="alert">{gainersError}</div>;
  } else {
    content = searchResults.map((gainer) => (
      <li className="detail" key={gainer.symbol}>
        <NavLink to={`/${gainer.symbol}`} className="detail-link">
          <div className="detail-info">
            <h4>{gainer.name}</h4>
            <p>
              Change:&nbsp;
              {gainer.change}
            </p>
          </div>
        </NavLink>
      </li>
    ));
  }

  return (
    <section className="gainers-search ">

      <div className="">
        <img src={imgSmg} alt="nasdaq logo" width="400" height="200" />
        <form action="" className="form">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
        </form>
      </div>
      <ul className="gainers-container">
        {content}
      </ul>

    </section>
  );
}
