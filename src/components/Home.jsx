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

  if (gainersLoading) {
    content = (
      <li>
        <h2>Loading...</h2>
      </li>
    );
  } else if (gainersError) {
    content = (
      <li>
        <h2>{gainersError}</h2>
      </li>
    );
  } else {
    content = gainers.gainers.map((gainer) => (
      <li className="card col-6" key={gainer.symbol}>
        <div className="card-body">
          <h5 className="card-title">{gainer.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{gainer.symbol}</h6>
          <p className="card-text">{gainer.change}</p>
        </div>
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
                    <input type="text" className="form-control" placeholder="Enter a Company Name" />
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
