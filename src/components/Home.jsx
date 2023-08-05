import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  selectGainers, selectGainersLoading, selectGainersError,
} from '../redux/gainersSlice';

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
      <li className="col-6" key={gainer.symbol}>
        <NavLink to={`/details/${gainer.symbol}`} className="text-decoration-none">
          <figure className="border rounded p-3 bg-success-subtle">
            <div className="row align-items-center">
              <div className="col-12">
                <h5>{gainer.name}</h5>
                <p>
                  Change:&nbsp;
                  {gainer.change}
                </p>
              </div>
            </div>
          </figure>
        </NavLink>
      </li>
    ));
  }

  return (
    <section>
      <div className="d-flex flex-column gap-3">
        <figure className="container mb-2 border rounded p-3 bg-success-subtle">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <h3>Stock Market Most Gainers API</h3>
              <form action="" className="text-center">
                <div className=" d-flex justify-content-center">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </form>
            </div>
            <ul className="row col-12">
              {content}
            </ul>
          </div>
        </figure>
      </div>
    </section>
  );
}
