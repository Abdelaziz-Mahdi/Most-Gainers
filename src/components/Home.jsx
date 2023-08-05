import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectGainers, selectGainersLoading, selectGainersError,
} from '../redux/gainersSlice';

export default function Home() {
  const gainers = useSelector(selectGainers);
  // console.log(gainers.gainers);
  const gainersLoading = useSelector(selectGainersLoading);
  const gainersError = useSelector(selectGainersError);
  let content;
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    const results = gainers.filter((gainer) => gainer.name.toLowerCase().includes(searchTerm));
    setSearchResults(results);
  }, [searchTerm, gainers]);

  if (searchTerm) {
    content = searchResults.map((gainer) => (
      <li className="card col-6" key={gainer.symbol}>
        <div className="card-body">
          <h5 className="card-title">{gainer.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{gainer.symbol}</h6>
          <p className="card-text">{gainer.change}</p>
        </div>
      </li>
    ));
  } else {
    content = gainers.map((gainer) => (
      <li className="card col-6" key={gainer.symbol}>
        <div className="card-body">
          <h5 className="card-title">{gainer.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{gainer.symbol}</h6>
          <p className="card-text">{gainer.change}</p>
        </div>
      </li>
    ));
  }

  if (gainersLoading) {
    content = <div className="spinner-border text-success" role="status" />;
  } else if (gainersError) {
    content = <div className="alert alert-danger" role="alert">{gainersError}</div>;
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
