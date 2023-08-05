import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  selectGainers, selectGainersLoading, selectGainersError,
} from '../redux/gainersSlice';

export default function Details() {
  const { symbol } = useParams();
  const dispatch = useDispatch();
  const gainers = useSelector(selectGainers);
  const detailsLoading = useSelector(selectGainersLoading);
  const detailsError = useSelector(selectGainersError);
  const [cardResults, setCardResults] = React.useState([]);
  React.useEffect(() => {
    const results = gainers.filter((gainer) => gainer.symbol.includes(symbol));
    setCardResults(results[0]);
  }, [gainers, symbol]);

  useEffect(() => {
    dispatch({ type: 'details/fetchDetails', payload: symbol });
  }, [dispatch, symbol]);

  let content;

  if (detailsLoading) {
    content = <div className="spinner-border text-success" role="status" />;
  } else if (detailsError) {
    content = <div className="alert alert-danger" role="alert">{detailsError}</div>;
  } else {
    content = (
      <div className="row">
        <div className="col-12">
          <h3>{cardResults.name}</h3>
          <p>
            Change:&nbsp;
            {cardResults.change}
            <br />
            Change Percent:&nbsp;
            {cardResults.changesPercentage}
            <br />
            Price:&nbsp;
            {cardResults.price}
            <br />
            Symbol:&nbsp;
            {cardResults.symbol}
          </p>
        </div>
      </div>
    );
  }

  return (
    <section>
      <div className="d-flex flex-column gap-3">
        <figure className="container mb-2 border rounded p-3 bg-success-subtle">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <h3>Stock Market Details API</h3>
            </div>
          </div>
        </figure>
        {content}
      </div>
    </section>
  );
}
