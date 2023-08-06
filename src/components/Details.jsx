import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  selectGainers, selectGainersLoading, selectGainersError,
} from '../redux/gainersSlice';
import '../styles/Details.css';

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
      <div className="details-list">
        <h3 className="text-white">{cardResults.name}</h3>
        <h3 className="text-white">{cardResults.symbol}</h3>
        <ul className="text-white">
          <li>
            Change:&nbsp;
            {cardResults.change}
          </li>
          <li>
            Change Percent:&nbsp;
            {cardResults.changesPercentage}
          </li>
          <li>
            Price:&nbsp;
            {cardResults.price}
          </li>
          <li>
            Symbol:&nbsp;
            {cardResults.symbol}
          </li>
        </ul>
      </div>
    );
  }

  return (
    <section>
      <div className="details-container">
        {content}
      </div>
    </section>
  );
}
